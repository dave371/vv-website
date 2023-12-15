import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import Plans from '@/components/Plans';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-green-700 shadow-[0_0_0_100vmax_#146114] section-clip py-5">
        <Benefits />
        <Testimonials />
      </div>
      <Plans />
      <FAQ />
      <Contact />
    </>
  );
}
