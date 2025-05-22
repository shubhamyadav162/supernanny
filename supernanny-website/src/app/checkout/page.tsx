import Link from 'next/link';

export default function CheckoutPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // Extract search parameters with defaults
  const service = Array.isArray(searchParams.service) ? searchParams.service[0] : searchParams.service || '';
  const numChildren = Array.isArray(searchParams.numChildren) ? searchParams.numChildren[0] : searchParams.numChildren || '';
  const date = Array.isArray(searchParams.date) ? searchParams.date[0] : searchParams.date || '';
  const time = Array.isArray(searchParams.time) ? searchParams.time[0] : searchParams.time || '';
  const childAges = Array.isArray(searchParams.childAges) ? searchParams.childAges[0] : searchParams.childAges || '';
  const addOns = Array.isArray(searchParams.addOns) ? searchParams.addOns[0] : searchParams.addOns || '';
  const selectedPlan = Array.isArray(searchParams.selectedPlan) ? searchParams.selectedPlan[0] : searchParams.selectedPlan || '';
  const instructions = Array.isArray(searchParams.instructions) ? searchParams.instructions[0] : searchParams.instructions || '';

  // Parse plan into hours and price
  const [hours, price] = selectedPlan.split('|');
  const planText = selectedPlan ? `${hours} hours - ₹${price}/month` : '';

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading text-4xl md:text-5xl text-white mb-6">Review Your Booking</h1>
          <p className="subheading text-white mb-4 max-w-2xl mx-auto">
            Please review your booking details and proceed to payment.
          </p>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-softcream">
        <div className="container mx-auto px-4">
          <div className="card bg-white p-8 rounded-xl mx-auto max-w-md text-charcoal space-y-4">
            <p><strong>Service:</strong> {service}</p>
            {planText && <p><strong>Plan:</strong> {planText}</p>}
            {(date || time) && <p><strong>Date & Time:</strong> {date}{time && ` at ${time}`}</p>}
            {numChildren && <p><strong>Children:</strong> {numChildren}{childAges && ` (Ages: ${childAges})`}</p>}
            {addOns && <p><strong>Add-Ons:</strong> {addOns}</p>}
            {instructions && <p><strong>Notes:</strong> {instructions}</p>}

            <div className="mt-6 flex justify-between">
              <Link href="/">
                <button className="btn-secondary">Edit Booking</button>
              </Link>
              <button className="btn-primary">Proceed to Payment</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 