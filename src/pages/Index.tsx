import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Indicators from '@/components/Indicators';
import Products from '@/components/Products';
import VideoSection from '@/components/VideoSection';
import FAQ from '@/components/FAQ';
import CTASimulator from '@/components/CTASimulator';
import News from '@/components/News';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Indicators />
        <Products />
        <VideoSection />
        <FAQ />
        <CTASimulator />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
