import Razorpay from 'razorpay';
import config from '../config';

// Create a mock Razorpay instance if credentials are not available
let razorpay: Razorpay;

if (!config.razorpayKeyId || !config.razorpayKeySecret) {
  console.warn('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET not set. Using mock implementation.');
  // Mock implementation
  razorpay = {
    orders: {
      create: async (options: any) => ({
        id: `mock_order_${Date.now()}`,
        amount: options.amount,
        currency: options.currency,
        receipt: options.receipt,
        status: 'created',
      }),
    },
  } as any;
} else {
  // Real implementation
  razorpay = new Razorpay({
    key_id: config.razorpayKeyId,
    key_secret: config.razorpayKeySecret,
  });
}

export async function createOrder(amount: number, currency: string = 'INR', receipt?: string) {
  const options = {
    amount,
    currency,
    receipt,
    payment_capture: 1,
  };
  return await razorpay.orders.create(options);
} 