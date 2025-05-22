import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-quicksand font-bold mb-6 text-bubblegum">Contact Us</h1>
        <p className="font-nunito text-charcoal">
          Please reach out to us at{' '}
          <a href="mailto:contact@supernanny.com" className="text-bubblegum">
            contact@supernanny.com
          </a>.
        </p>
      </div>
      <Footer />
    </main>
  );
} 