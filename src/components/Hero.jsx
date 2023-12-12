import Image from 'next/image';
import heroImage from '../../images/hero.webp';

export default function Hero() {
  return (
    <div className="mt-12">
      <HeroText />
      <HeroImage />
    </div>
  );
}

function HeroText() {
  return (
    <>
      <h1 className="text-4xl leading-[50px] font-semibold font-body">
        Elevate Your Wellness Journey with VitalityVault
      </h1>
      <p className="mt-2 mb-5 text-lg">
        Discover Tailored Solutions for a Healthier, Happier You
      </p>
      <button className="px-4 py-2 text-xl font-semibold text-white bg-green-500 rounded">
        Start Your Transformation
      </button>
    </>
  );
}

function HeroImage() {
  return (
    <div className="relative w-full my-12 rounded aspect-square bg-emerald-900">
      <Image
        className="rounded"
        src={heroImage}
        alt="lady meditating outside in nature"
        fill
      />
    </div>
  );
}
