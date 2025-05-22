import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-quicksand font-bold mb-6 text-bubblegum">Our Services</h1>
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
} 