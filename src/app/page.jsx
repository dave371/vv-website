import Hero from '@/components/Hero';
import LandingAbout from '@/components/LandingAbout';
import Nav from '@/components/Nav';
import Services from '@/components/Services';

export default function Home() {
  return (
    <div>
      <Nav />

      <div className="p-4">
        <Hero />
        <LandingAbout />
        <Services />
      </div>
    </div>
  );
}
