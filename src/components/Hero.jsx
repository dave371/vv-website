export default function Hero() {
  return (
    <div className="mt-16">
      <HeroText />
      <HeroImage />
    </div>
  );
}

function HeroText() {
  return (
    <>
      <h1 className="text-5xl font-semibold">
        Elevate Your Wellbeing with VitalityVault
      </h1>
      <p className="mt-6 mb-8 text-xl">
        Seamless Wellness Solutions for Busy Lives
      </p>
      <button className="px-3 py-2 text-lg font-medium text-white rounded bg-emerald-800">
        Start Your Journey
      </button>
    </>
  );
}

function HeroImage() {
  return <div className="w-full my-16 rounded aspect-square bg-emerald-900" />;
}
