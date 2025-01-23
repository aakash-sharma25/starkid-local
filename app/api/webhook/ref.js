import { db } from "@/lib/firebase";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import crypto from "crypto";

export async function POST(req) {
  try {
    const secretKey = process.env.CASHFREE_SECRET_KEY; // Set this in your .env file
    const body = await req.json();

    // Verify the webhook signature (HMAC SHA256)
    const receivedSignature = req.headers.get("x-webhook-signature");
    const computedSignature = crypto
      .createHmac("sha256", secretKey)
      .update(JSON.stringify(body))
      .digest("base64");

    if (receivedSignature !== computedSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    // Extract parent contact details (example payload)
    const parentContact = {
      phoneNo: "9999999999", // Replace with actual phone number
      contact: "Contact Name",
      name: "Parent Name",
      relation: "Father",
    };



    //below code is not added in main code till now



    // Check if phone number exists in Firestore
    const phoneDocRef = doc(
      collection(db, "parentContacts"),
      parentContact.phoneNo
    );
    const phoneDocSnap = await getDoc(phoneDocRef);

    if (phoneDocSnap.exists()) {
      // If phone number exists, run separate function
      logPhoneNumberExists(parentContact.phoneNo);
      return new Response(
        `Phone number ${parentContact.phoneNo} already exists.`,
        { status: 200 }
      );
    }


    //till here




    // If phone number does not exist, create parent and related data
    const parentId = doc(collection(db, "parent")).id; // Auto-generated parent ID

    // Save `parentContact` under the parent
    const parentContactRef = doc(
      collection(db, `parent/${parentId}/parentContact`),
      parentContact.phoneNo
    );
    await setDoc(parentContactRef, parentContact);

    // Save `userIds` under the parent
    const userIds = [
      {
        name: "Child 1",
        age: 12,
        school: "School 1",
      },
      {
        name: "Child 2",
        age: 14,
        school: "School 2",
      },
    ];

    for (const user of userIds) {
      const userRef = doc(collection(db, `parent/${parentId}/userIds`));
      await setDoc(userRef, user);
    }

    return new Response("Parent and children data saved successfully", {
      status: 200,
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Function to log phone number existence (you can add more logic later)
function logPhoneNumberExists(phoneNo) {
  console.log(`Phone number ${phoneNo} already exists in the database.`);
  // Add any additional logic here, e.g., sending an alert or logging the data elsewhere
}

// {
//   "data": {
//     "form": {
//       "cf_form_id": 6303131,
//       "form_id": null,
//       "form_url": "https://payments-test.cashfree.com/forms/starkid",
//       "form_currency": "INR"
//     },
//     "order": {
//       "order_id": "CFPay_starkid_2g8j57nnnr",
//       "order_amount": "10.00",
//       "transaction_id": 5114915825397,
//       "order_status": "PAID",
//       "customer_details": {
//         "customer_phone": "7777777777",
//         "customer_email": "no-reply@cashfree.com",
//         "customer_name": "",
//         "customer_fields": [
//           {
//             "title": "Doc80G",
//             "value": ""
//           },
//           {
//             "title": "Name of your child",
//             "value": "testing with child name"
//           },
//           {
//             "title": "Age of your child",
//             "value": "age of child"
//           }
//         ]
//       },
//       "amount_details": [
//         {
//           "title": "10 Rs testing",
//           "value": "10"
//         }
//       ]
//     }
//   },
//   "type": "PAYMENT_FORM_ORDER_WEBHOOK",
//   "event_time": "2025-01-22T19:01:00+05:30"
// }