import config from '../config';
import * as razorpayProvider from './razorpay';

export async function createOrder(amount: number, currency: string = 'INR', receipt?: string) {
  switch (config.provider) {
    case 'razorpay':
      return await razorpayProvider.createOrder(amount, currency, receipt);
    default:
      throw new Error(`Unsupported payment provider: ${config.provider}`);
  }
} 