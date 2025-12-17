

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header title="AI Car Search" />
      <main>
        
        <section className="pt-32 pb-12 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600"></p>
        </section>

        <section className="py-16 max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <div className="prose prose-lg text-gray-600">
                <p>We are dedicated to building the best tools for modern businesses.</p>
            </div>
        </section>

      </main>
      <Footer title="AI Car Search" />
    </div>
  );
}
