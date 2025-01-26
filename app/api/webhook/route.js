import {
  collection,
  collectionGroup,
  doc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import { NextResponse } from "next/server";
import { retryOperation } from "@/utils/retryHandler";

function getClassFromAge(age) {
  age = Number(age);

  if (isNaN(age)) {
    throw new Error(`Invalid age: ${age}. Age must be a valid number.`);
  }

  age = Math.round(age);

  if (age >= 3 && age <= 8) return 3;
  if (age === 9) return 4;
  if (age === 10) return 5;
  if (age === 11) return 6;
  if (age === 12) return 7;
  if (age >= 13) return 8;

  throw new Error(`Invalid age: ${age}`);
}

async function checkPhoneExists(phoneNumber) {
  const querySnapshot = await getDocs(
    query(
      collectionGroup(db, "parentContacts"),
      where("parentContact", "==", phoneNumber)
    )
  );

  if (querySnapshot.empty) {
    return { exists: false, parentId: null };
  }

  const parentContactDoc = querySnapshot.docs[0];
  const parentId = parentContactDoc.ref.parent.parent.id;
  return { exists: true, parentId };
}

async function createNewParent(phone, studentDetail) {
  const parentId = doc(collection(db, "Parents")).id;
  const parentRef = doc(db, "Parents", parentId);

  await setDoc(parentRef, {
    isManualPaidUser: true,
    manualExpirationDate: Timestamp.fromDate(new Date("2025-02-14")),
  });

  // Save parent contact under parentContacts subcollection
  const parentContactRef = doc(
    collection(db, `Parents/${parentId}/parentContacts`),
    phone
  );
  await setDoc(parentContactRef, {
    parentContact: phone,
    parentName: "Default",
    parentRelation: "None",
  });

  // Save student detail under userIds subcollection
  const userId = doc(collection(db, `Parents/${parentId}/UserIds`)).id;
  const userRef = doc(db, `Parents/${parentId}/UserIds/${userId}`);
  await setDoc(userRef, studentDetail);

  return parentId;
}

async function createNewUserForExistingParent(parentId, studentDetail) {
  try {
    const userIdsRef = collection(db, `Parents/${parentId}/UserIds`);
    const existingUsersQuery = query(
      userIdsRef,
      where("userName", "==", studentDetail.userName),
      where("class", "==", studentDetail.class)
    );
    const querySnapshot = await getDocs(existingUsersQuery);

    if (!querySnapshot.empty) {
      console.log(
        "Duplicate payment detected for user:",
        querySnapshot.docs[0].data()
      );
      return {
        success: false,
        message: "Duplicate payment detected. User already exists.",
        existingUser: querySnapshot.docs[0].data(),
      };
    }

    // If no duplicates are found, create a new user
    const userRef = doc(userIdsRef);
    await setDoc(userRef, studentDetail);
    return {
      success: true,
      message: "User added successfully.",
      userId: userRef.id,
    };
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const order = body?.data?.order;
    const paymentStatus = order?.order_status;
    // const childName = order?.customer_details?.customer_fields[1]?.value;
    // const age = order?.customer_details?.customer_fields[2]?.value;
    const phone = order?.customer_details?.customer_phone;

    const customerField = order?.customer_details?.customer_fields;

    const childName = customerField?.find(
      (field) => field.title === "Name of your child"
    )?.value;
    const age = customerField?.find(
      (field) => field.title === "Age of your child"
    )?.value;

    if (!paymentStatus || !childName || !age || !phone) {
      return new Response("Missing required fields", { status: 400 });
    }

    const studentDetail = {
      userName: childName,
      class: getClassFromAge(age),
      gender: "none",
      schoolId: doc(db, "Schools", "hc3ED2P35H7SABAonaV7"), // schoolId: "/Schools/hc3ED2P35H7SABAonaV7", // doc(db, "Schools", "hc3ED2P35H7SABAonaV7"),
    };

    // Check if phone exists in the database
    // const { exists, parentId } = await checkPhoneExists(phone);
    const { exists, parentId } = await retryOperation(() =>
      checkPhoneExists(phone, studentDetail)
    );

    if (exists) {
      // const userId = await createNewUserForExistingParent(
      //   parentId,
      //   studentDetail
      // );
      const userId = await retryOperation(() =>
        createNewUserForExistingParent(parentId, studentDetail)
      );
      return NextResponse.json(
        {
          message: "Phone exists. New user added successfully.",
          userId,
          parentId,
        },
        { status: 200 }
      );
    } else {
      // Create a new parent and user
      // const newParentId = await createNewParent(phone, studentDetail);
      const newParentId = await retryOperation(() =>
        createNewParent(phone, studentDetail)
      );
      return NextResponse.json(
        {
          message:
            "Phone does not exist. New parent and user created successfully.",
          parentId: newParentId,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
