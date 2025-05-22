import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NanniesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-quicksand font-bold mb-6 text-bubblegum">Our Nannies</h1>
        <p className="font-nunito text-charcoal">Details about our nannies will be here.</p>
      </div>
      <Footer />
    </main>
  );
} 