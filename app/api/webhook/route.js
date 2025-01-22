import { collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import crypto from "crypto";
import { db } from "@/app/firebaseConfig";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("function is called with the webhook");
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const body = await req.json();

    console.log(body);

    const order = body?.data?.order;
    const orderId = order?.order_id;
    const paymentId = order?.transaction_id;
    const paymentStatus = order?.order_status;
    const paymentAmount = order?.order_amount;
    const childName = order?.customer_details?.customer_fields[1]?.value;
    const age = order?.customer_details?.customer_fields[2]?.value;
    const phone = order?.customer_details?.customer_phone;
    const paymentCurrency = body?.data?.form?.form_currency;

    console.log(childName, phone, paymentAmount, paymentStatus);

    if (
      !orderId ||
      !paymentId ||
      !paymentStatus ||
      !paymentAmount ||
      !paymentCurrency ||
      !childName ||
      !age ||
      !phone
    ) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Parent details
    const parentContact = {
      parentContact: phone,
      parentName: "Default",
      parentRelation: "None",
    };

    const parentId = doc(collection(db, "Parents")).id; // Auto-generated parent ID
    const parentRef = doc(db, "Parents", parentId); // Correctly reference the document
    await setDoc(parentRef, {
      isManualPaidUser: true,
      manualExpirationDate: Timestamp.fromDate(new Date("2025-02-14")),
    });

    // Save `parentContact` under the parent
    const parentContactRef = doc(
      collection(db, `Parents/${parentId}/parentContacts`), // Reference the parentContacts subcollection
      parentContact.parentContact // Use the phone number as the document ID
    );
    await setDoc(parentContactRef, parentContact);

    // Student details
    const studentDetail = {
      class: 3, // Example: calculate from age
      gender: "none",
      schoolId: "/Schools/hc3ED2P35H7SABAonaV7", // Example: dynamic school ID
      userName: childName,
    };

    // Generate user ID and save student details
    const userId = doc(collection(db, `Parents/${parentId}/userIds`)).id;
    const userRef = doc(db, `Parents/${parentId}/userIds/${userId}`);
    await setDoc(userRef, studentDetail);

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

// export async function POST(req) {
//   try {
//     console.log("function is called with the webhook");
//     const secretKey = process.env.CASHFREE_SECRET_KEY;
//     const body = await req.json();

//     // console.log("this is the content of the body");

//     console.log(body);

//     const order = body?.data?.order;
//     const orderId = order?.order_id;
//     const paymentId = order?.transaction_id;
//     const paymentStatus = order?.order_status;
//     const paymentAmount = order?.order_amount;
//     const childName = order?.customer_details?.customer_fields[1]?.value;
//     const age = order?.customer_details?.customer_fields[2]?.value;
//     const phone = order?.customer_details?.customer_phone;
//     const paymentCurrency = body?.data?.form?.form_currency;

//     console.log(childName, phone, paymentAmount, paymentStatus);

//     if (
//       !orderId ||
//       !paymentId ||
//       !paymentStatus ||
//       !paymentAmount ||
//       !paymentCurrency ||
//       !childName ||
//       !age ||
//       !phone
//     ) {
//       return new Response("Missing required fields", { status: 400 });
//     }

//     //parent detail

//     const parentContact = {
//       parentContact: phone,
//       parentName: "Default",
//       parentRelation: "None",
//     };

//     // If phone number does not exist, create parent and related data
//     const parentId = doc(collection(db, "Parents")).id; // Auto-generated parent ID

//     // Save `parentContact` under the parent
//     const parentContactRef = doc(
//       collection(db, `Parents/${parentId}/parentContacts`),
//       parentContact.parentContact
//     );
//     await setDoc(parentContactRef, parentContact);

//     const studentDetail = {
//       class: 3, //have to get by age
//       gender: "none",
//       schoolId: "/Schools/hc3ED2P35H7SABAonaV7", // have to get by duration
//       userName: childName,
//     };

//     const userId = doc(collection(db, `Parents/${parentId}/userIds`)).id;
//     const userRef = doc(collection(db, `Parents/${parentId}/userIds`, userId));
//     await setDoc(userRef, studentDetail);

//     // return new Response("Webhook processed successfully", { status: 200 });
//     return NextResponse.json(
//       {
//         message:
//           "Webhook pocessed successfully entry to database is successfull",
//       },
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     console.error("Error processing webhook:", error);
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }

// {
//   data: {
//     form: {
//       cf_form_id: 6303131,
//       form_id: null,
//       form_url: 'https://payments-test.cashfree.com/forms/starkid',
//       form_currency: 'INR'
//     },
//     order: {
//       order_id: 'CFPay_starkid_4l7jnvh3f',
//       order_amount: '10.00',
//       transaction_id: 5114915808609,
//       order_status: 'PAID',
//       customer_details: [Object],
//       amount_details: [Array]
//     }
//   },
//   type: 'PAYMENT_FORM_ORDER_WEBHOOK',
//   event_time: '2025-01-21T15:14:44+05:30'
// }

// export async function POST(req) {
//   try {
//     console.log("function is called with the webhook");
//     const secretKey = process.env.CASHFREE_SECRET_KEY;
//     const body = await req.json();
//     // console.log("this is the content of the body");

//     console.log(body);

//     // Extract relevant details from the webhook payload
//     const order = body?.data?.order;
//     const orderId = order?.order_id;
//     const paymentId = order?.transaction_id;
//     const paymentStatus = order?.order_status;
//     const paymentAmount = order?.order_amount;
//     const childName = order?.customer_details?.customer_fields[1]?.value;
//     const age = order?.customer_details?.customer_fields[2]?.value;
//     const phone = order?.customer_details?.customer_phone;
//     const paymentCurrency = body?.data?.form?.form_currency;

//     console.log(childName, phone, paymentAmount, paymentStatus);

//     if (
//       !orderId ||
//       !paymentId ||
//       !paymentStatus ||
//       !paymentAmount ||
//       !paymentCurrency ||
//       !childName ||
//       !age ||
//       !phone
//     ) {
//       return new Response("Missing required fields", { status: 400 });
//     }

//     //parent detail

//     const parentContact = {
//       parentContact: phone,
//       parentName: "Default",
//       parentRelation: "None",
//     };

//     // If phone number does not exist, create parent and related data
//     const parentId = doc(collection(db, "Parents")).id; // Auto-generated parent ID

//     // Save `parentContact` under the parent
//     const parentContactRef = doc(
//       collection(db, `Parents/${parentId}/parentContacts`),
//       parentContact.parentContact
//     );
//     await setDoc(parentContactRef, parentContact);

//     const studentDetail = {
//       class: 3, //have to get by age
//       gender: "none",
//       schoolId: "/Schools/hc3ED2P35H7SABAonaV7", // have to get by duration
//       userName: childName,
//     };

//     const userId = doc(collection(db, `Parents/${parentId}/userIds`)).id;
//     const userRef = doc(collection(db, `Parents/${parentId}/userIds`, userId));
//     await setDoc(userRef, studentDetail);

//     // const docRef = doc(db, "payments", phone);

//     // await setDoc(docRef, {
//     //   orderId,
//     //   paymentId,
//     //   paymentStatus,
//     //   paymentAmount,
//     //   paymentCurrency,
//     //   name,
//     //   email,
//     //   phone,
//     //   receivedAt: new Date().toISOString(),
//     // });

//     // const data = await getDoc()
//     // Verify the webhook signature (HMAC SHA256)
//     // const receivedSignature = req.headers.get('x-webhook-signature');
//     // const computedSignature = crypto
//     //   .createHmac('sha256', secretKey)
//     //   .update(JSON.stringify(body))
//     //   .digest('base64');

//     // if (receivedSignature !== computedSignature) {
//     //   return new Response('Invalid signature', { status: 401 });
//     // }

//     // Extract relevant details from the webhook payload
//     // const { order_id, payment_id, payment_status, payment_amount, payment_currency } = body;

//     // // Save the webhook data to Firestore
//     // const docRef = doc(db, 'payments', order_id);
//     // await setDoc(docRef, {
//     //   orderId: order_id,
//     //   paymentId: payment_id,
//     //   paymentStatus: payment_status,
//     //   paymentAmount: payment_amount,
//     //   paymentCurrency: payment_currency,
//     //   receivedAt: new Date().toISOString(),
//     // });

//     // console.log(body)

//     // return new Response("Webhook processed successfully", { status: 200 });
//     return NextResponse.json(
//       {
//         message:
//           "Webhook pocessed successfully entry to database is successfull",
//       },
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     console.error("Error processing webhook:", error);
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }
