import Razorpay from 'razorpay';
import config from '../config';

if (!config.razorpayKeyId || !config.razorpayKeySecret) {
  throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set in environment');
}

const razorpay = new Razorpay({
  key_id: config.razorpayKeyId,
  key_secret: config.razorpayKeySecret,
});

export async function createOrder(amount: number, currency: string = 'INR', receipt?: string) {
  const options = {
    amount,
    currency,
    receipt,
    payment_capture: 1,
  };
  return await razorpay.orders.create(options);
} 