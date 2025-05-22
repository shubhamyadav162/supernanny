// src/lib/payment/config.ts
export type PaymentProvider = 'razorpay' | 'stripe' | 'paypal';

export interface PaymentConfig {
  provider: PaymentProvider;
  razorpayKeyId?: string;
  razorpayKeySecret?: string;
  stripeSecretKey?: string;
  stripePublishableKey?: string;
  paypalClientId?: string;
  paypalSecret?: string;
}

const config: PaymentConfig = {
  provider: (process.env.PAYMENT_PROVIDER as PaymentProvider) || 'razorpay',
  razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  paypalClientId: process.env.PAYPAL_CLIENT_ID,
  paypalSecret: process.env.PAYPAL_SECRET,
};

export default config; 