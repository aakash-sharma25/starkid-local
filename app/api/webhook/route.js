import { doc, setDoc } from 'firebase/firestore';
import crypto from 'crypto';
import { db } from '@/app/firebaseConfig';

export async function POST(req) {
  try {
    console.log("function is called with the webhook")
    const secretKey = process.env.CASHFREE_SECRET_KEY; 
    const body = await req.json();
    console.log("this is the content of the body")

    console.log(body)
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

    console.log(body)

    return new Response('Webhook processed successfully', { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
