import {
  ClipboardIcon,
  ClockIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Tailored to You',
    description:
      'Tailored fitness and nutrition plans crafted uniquely for your goals.',
  },
  {
    title: 'Wellness on Your Terms',
    description:
      'Access expert guidance and virtual classes at your convenience, anywhere.',
  },
  {
    title: 'Mind, Body, Spirit',
    description:
      'Achieve balance with personalized plans covering mind, body, and spirit.',
  },
];

export default function Benefits() {
  return (
    <section className="text-white">
      <h2 className="text-2xl font-medium">
        Experience the VitalityVault Advantage
      </h2>

      <div className="flex flex-col gap-14 mt-7">
        <BenefitCard
          title={benefits[0].title}
          description={benefits[0].description}
        >
          <ClipboardIcon className="w-12 h-12" />
        </BenefitCard>

        <BenefitCard
          title={benefits[1].title}
          description={benefits[1].description}
        >
          <ClockIcon className="w-12 h-12" />
        </BenefitCard>

        <BenefitCard
          title={benefits[2].title}
          description={benefits[2].description}
        >
          <ScaleIcon className="w-12 h-12" />
        </BenefitCard>
      </div>
    </section>
  );
}

function BenefitCard({ children, title, description }) {
  return (
    <div className="flex flex-col items-center">
      {children}

      <div className="mt-3 text-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
}
