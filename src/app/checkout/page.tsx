'use client';

import { useState } from 'react';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';

export default function CheckoutPage() {
  const params = useSearchParams();
  const service = params.get('service') || '';
  const numChildren = params.get('numChildren') || '';
  const date = params.get('date') || '';
  const time = params.get('time') || '';
  const name = params.get('name') || '';
  const email = params.get('email') || '';
  const phone = params.get('phone') || '';
  const selectedPlan = params.get('selectedPlan') || '';
  const instructions = params.get('instructions') || '';
  const childAges = params.get('childAges') || '';
  const addOns = params.get('addOns') || '';
  // Default to ₹500.00 if not provided
  const amount = parseInt(params.get('amount') || '50000', 10);

  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || 'Payment initiation failed');
      }
      const { orderId, amount: orderAmount, currency, key } = data;
      const options = {
        key,
        amount: orderAmount,
        currency,
        order_id: orderId,
        name: 'SuperNanny',
        description: 'Service Booking Payment',
        handler(response: any) {
          alert(`Payment successful: ${response.razorpay_payment_id}`);
          window.location.href = `/checkout/success?orderId=${orderId}`;
        },
        prefill: { name, email, contact: phone },
        theme: { color: '#2563EB' },
      };
      // @ts-ignore
      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">Checkout</h1>
        <div className="space-y-2 mb-6">
          <p><strong>Service:</strong> {service}</p>
          <p><strong>Plan:</strong> {selectedPlan}</p>
          <p><strong>Date & Time:</strong> {date} at {time}</p>
          <p><strong>Children:</strong> {numChildren} (Ages: {childAges})</p>
          <p><strong>Add-Ons:</strong> {addOns}</p>
          {instructions && <p><strong>Notes:</strong> {instructions}</p>}
          <p className="mt-4 text-lg"><strong>Total:</strong> ₹{(amount/100).toFixed(2)}</p>
        </div>
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold"
        >
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </div>
    </div>
  );
} 