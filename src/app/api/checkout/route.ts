import { NextResponse } from 'next/server';
import { createOrder } from '@/lib/payment/providers';
import config from '@/lib/payment/config';

export async function POST(request: Request) {
  try {
    const { amount, currency, receipt } = await request.json();
    if (!amount) {
      return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
    }
    const order = await createOrder(amount, currency, receipt);
    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: config.razorpayKeyId,
    });
  } catch (err: any) {
    console.error('Checkout API error:', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
} 