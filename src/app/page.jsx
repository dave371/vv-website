import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Plans from '@/components/Plans';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonials />
      <Plans />
      <FAQ />
      <Contact />
    </>
  );
}
