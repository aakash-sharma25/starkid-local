import { doc, setDoc } from "firebase/firestore";
import crypto from "crypto";
import { db } from "@/app/firebaseConfig";

export async function POST(req) {
  try {
    console.log("function is called with the webhook");
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const body = await req.json();
    console.log("this is the content of the body");

    console.log(body);

    // Extract relevant details from the webhook payload
    const order = body?.data?.order;
    const orderId = order?.order_id;
    const paymentId = order?.transaction_id;
    const paymentStatus = order?.order_status;
    const paymentAmount = order?.order_amount;
    const name = order?.customer_details?.customer_name;
    const email = order?.customer_details?.customer_email;
    const phone = order?.customer_details?.customer_phone;
    const paymentCurrency = body?.data?.form?.form_currency;

    console.log(name, email, phone, paymentAmount, paymentStatus);

    if (
      !orderId ||
      !paymentId ||
      !paymentStatus ||
      !paymentAmount ||
      !paymentCurrency
    ) {
      return new Response("Missing required fields", { status: 400 });
    }

    // console.log(
    //   orderId,
    //   paymentAmount,
    //   paymentId,
    //   paymentCurrency,
    //   paymentStatus
    // );

    const docRef = doc(db, "payments", orderId);
    await setDoc(docRef, {
      orderId,
      paymentId,
      paymentStatus,
      paymentAmount,
      paymentCurrency,
      name,
      email,
      phone,
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
