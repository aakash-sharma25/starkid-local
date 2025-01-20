import { doc, setDoc } from "firebase/firestore";
import crypto from "crypto";
import { db } from "@/app/firebaseConfig";

export async function POST(req) {
  try {
    console.log("function is called with the webhook");
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const body = await req.json();
    console.log("this is the content of the body");

    //   {
    //     "data": {
    //         "form": {
    //             "form_id": "my-form-1",
    //             "cf_form_id": 2011640,
    //             "form_url": "https://payments-test.cashfree.com/forms/webhook-trial-1",
    //             "form_currency": "INR"
    //         },
    //         "order": {
    //             "order_amount": 22,
    //             "order_id": "CFPay_U1mgll3c0e9g_ehdcjjbtckf",
    //             "order_status": "PAID",
    //             "transaction_id": 1021206,
    //             "customer_details": {
    //                 "customer_phone": "9999999999",
    //                 "customer_email": "mohit.jasapara@cashfree.com",
    //                 "customer_name": "Mohit Jasapara",
    //                 "customer_fields": [
    //                     {
    //                         "title": "Zoom ID",
    //                         "value": "mohit.jasapara"
    //                     },
    //                     {
    //                         "title": "Company Designation",
    //                         "value": ""
    //                     }
    //                 ]
    //             },
    //             "amount_details": [
    //                 {
    //                     "title": "Webinar Tickets",
    //                     "value": 398,
    //                     "quantity": 2
    //                 },
    //                 {
    //                     "title": "Zoom Platform Fee",
    //                     "value": 10
    //                 },
    //                 {
    //                     "title": "Buy me a coffee :)",
    //                     "value": 0
    //                 },
    //                 {
    //                     "title": "Amount Dropdown Trial",
    //                     "value": 50,
    //                     "selectedoption": "Option 1"
    //                 }
    //             ]
    //         }
    //     },
    //     "event_time": "2021-04-16T14:10:36+05:30",
    //     "type": "PAYMENT_FORM_ORDER_WEBHOOK"
    // }

    // console.log(body)

    // Extract relevant details from the webhook payload
    const order = body?.data?.order;
    const orderId = order?.order_id;
    const paymentId = order?.transaction_id;
    const paymentStatus = order?.order_status;
    const paymentAmount = order?.order_amount;
    const paymentCurrency = body?.data?.form?.form_currency;

    if (
      !orderId ||
      !paymentId ||
      !paymentStatus ||
      !paymentAmount ||
      !paymentCurrency
    ) {
      return new Response("Missing required fields", { status: 400 });
    }

    console.log(
      orderId,
      paymentAmount,
      paymentId,
      paymentCurrency,
      paymentStatus
    );

    // Save the webhook data to Firestore
    const docRef = await doc(db, "payments", orderId);
    await setDoc(docRef, {
      orderId,
      paymentId,
      paymentStatus,
      paymentAmount,
      paymentCurrency,
      receivedAt: new Date().toISOString(),
    });

    // Verify the webhook signature (HMAC SHA256)
    // const receivedSignature = req.headers.get('x-webhook-signature');
    // const computedSignature = crypto
    //   .createHmac('sha256', secretKey)
    //   .update(JSON.stringify(body))
    //   .digest('base64');

    // if (receivedSignature !== computedSignature) {
    //   return new Response('Invalid signature', { status: 401 });
    // }

    // Extract relevant details from the webhook payload
    // const { order_id, payment_id, payment_status, payment_amount, payment_currency } = body;

    // // Save the webhook data to Firestore
    // const docRef = doc(db, 'payments', order_id);
    // await setDoc(docRef, {
    //   orderId: order_id,
    //   paymentId: payment_id,
    //   paymentStatus: payment_status,
    //   paymentAmount: payment_amount,
    //   paymentCurrency: payment_currency,
    //   receivedAt: new Date().toISOString(),
    // });

    // console.log(body)

    return new Response("Webhook processed successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
