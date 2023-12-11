const services = [
  {
    name: 'Personalized Fitness Plans',
    description:
      'Receive custom workout routines tailored to your fitness level and individual goals.',
  },
  {
    name: 'Nutritional Coaching',
    description:
      'Get personalized guidance on nutrition, meal planning, and cultivating healthy eating habits.',
  },
  {
    name: 'Mental Wellness Workshops',
    description:
      'Participate in interactive sessions focusing on stress management, mindfulness, and mental well-being.',
  },
  {
    name: 'Live Virtual Fitness Classes',
    description:
      'Join engaging group classes led by certified instructors, accessible from the comfort of your home.',
  },
  {
    name: 'Health Assessment and Goal Setting',
    description:
      'Undergo an initial assessment to understand your health needs, followed by goal-setting sessions.',
  },
  {
    name: 'Wellness Challenges',
    description:
      'Embark on fun and motivating challenges to encourage healthy habits and friendly competition.',
  },
];

export default function Services() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-medium">Discover Your Path To Wellness</h2>

      <div className="flex flex-col gap-8 mt-4">
        {services.map((service, i) => (
          <ServiceCard key={i} serviceData={service} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ serviceData }) {
  return (
    <div className="flex flex-col">
      <div className="relative max-w-[320px] aspect-square bg-emerald-900"></div>
      <div>
        <h3 className="mt-3 text-xl font-semibold">{serviceData.name}</h3>
        <p className="mt-1">{serviceData.description}</p>
      </div>
    </div>
  );
}
