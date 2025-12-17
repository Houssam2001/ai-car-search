

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header title="AI Car Search" />
      <main>
        
        <Hero 
            title={`Revolutionize Your Workflow`}
            subtitle={`The ultimate solution for scaling your business efficiently.`}
            ctaText={`Start Now`}
            image="https://source.unsplash.com/1200x630/?technology"
        />

        <FeatureGrid 
            title="Why Choose Us?" 
            features={[{"title":"Lightning Fast","description":"Optimized for speed and performance.","icon":"fast"},{"title":"Secure","description":"Bank-grade security for your data.","icon":"secure"},{"title":"Global Scale","description":"Reach audiences worldwide instantly.","icon":"global"}]} 
        />

      </main>
      <Footer title="AI Car Search" />
    </div>
  );
}
