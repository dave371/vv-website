import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Plans from '@/components/Plans';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <Nav />

      <div className="p-4">
        <Hero />
        <Benefits />
        <Testimonials />
        <Plans />
        <FAQ />
      </div>
    </div>
  );
}
