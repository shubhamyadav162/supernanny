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
  razorpayKeyId: process.env.RAZORPAY_KEY_ID || 'mock_key_id',
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET || 'mock_key_secret',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || 'mock_stripe_secret',
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || 'mock_stripe_key',
  paypalClientId: process.env.PAYPAL_CLIENT_ID || 'mock_paypal_id',
  paypalSecret: process.env.PAYPAL_SECRET || 'mock_paypal_secret',
};

export default config; 