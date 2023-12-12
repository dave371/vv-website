import Benefits from '@/components/Benefits';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <Nav />

      <div className="p-4">
        <Hero />
        <Benefits />
        <Testimonials />
      </div>
    </div>
  );
}
