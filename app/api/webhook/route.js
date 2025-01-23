import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore";
import crypto from "crypto";
import { db } from "@/app/firebaseConfig";
import { NextResponse } from "next/server";

function getClassFromAge(age) {
  if (age >= 3 && age <= 8) return 3;
  if (age === 9) return 4;
  if (age === 10) return 5;
  if (age === 11) return 6;
  if (age === 12) return 7;
  if (age >= 13) return 8;
  throw new Error(`Invalid age: ${age}`);
}

async function checkPhoneExists(phoneNumber, childData) {
  try {
    const querySnapshot = await getDocs(
      query(
        collectionGroup(db, "parentContacts"),
        where("parentContact", "==", phoneNumber)
      )
    );

    if (querySnapshot.empty) {
      console.log("Phone number does not exist");
      return false;
    }

    // Phone number exists, retrieve the parent ID

    console.log("phone no exist creating new userId");

    const parentContactDoc = querySnapshot.docs[0];
    const parentId = parentContactDoc.ref.parent.parent.id;

    // console.log("Parent ID:", parentId);

    const userRef = doc(collection(db, `Parents/${parentId}/userIds`));
    const userId = userRef.id;

    const newUser = {
      userName: childData?.userName || "Unknown Name",
      class: childData?.class || 0,
      gender: childData?.gender || "none",
      schoolId: childData?.schoolId || "/Schools/defaultSchoolId",
    };

    // Save the new user data

    await setDoc(userRef, newUser);

    console.log("User added successfully with userId:", userId);
    return true;
  } catch (error) {
    console.error("Error handling phone number:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred",
        error,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const secretKey = process.env.CASHFREE_SECRET_KEY;

    const body = await req.json();

    const order = body?.data?.order;
    const paymentStatus = order?.order_status;
    const childName = order?.customer_details?.customer_fields[1]?.value;
    const age = order?.customer_details?.customer_fields[2]?.value;
    const phone = order?.customer_details?.customer_phone;

    console.log(childName, phone, age, paymentStatus);

    if (!paymentStatus || !childName || !age || !phone) {
      return new Response("Missing required fields", { status: 400 });
    }

    const parentContacts = {
      parentContact: phone,
      parentName: "Default",
      parentRelation: "None",
    };

    const studentDetail = {
      class: getClassFromAge(age),
      gender: "none",
      schoolId: "/Schools/hc3ED2P35H7SABAonaV7", // remaining to implement
      userName: childName,
    };

    const phoneExist = await checkPhoneExists(phone, studentDetail);

    if (phoneExist) {
      console.log("in true block");
      return NextResponse.json(
        {
          message: "Created another userId",
          status: true,
        },
        { status: 200 }
      );
    } else {
      console.log("Phone Doesnt exist");

      const parentId = doc(collection(db, "Parents")).id;

      const parentRef = doc(db, "Parents", parentId);

      await setDoc(parentRef, {
        isManualPaidUser: true,
        manualExpirationDate: Timestamp.fromDate(new Date("2025-02-14")),
      });

      const parentContactRef = doc(
        collection(db, `Parents/${parentId}/parentContacts`),
        parentContacts.parentContact
      );

      await setDoc(parentContactRef, parentContacts);
      const userId = doc(collection(db, `Parents/${parentId}/userIds`)).id;
      const userRef = doc(db, `Parents/${parentId}/userIds/${userId}`);
      await setDoc(userRef, studentDetail);
    }

    return NextResponse.json(
      {
        message:
          "Webhook processed successfully, entry to database is successful",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}