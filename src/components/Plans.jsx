import Link from 'next/link';

const planList = {
  essential: {
    name: 'Essential Wellness',
    price: 100,
    benefits: [
      'Personalized Fitness Plans',
      'Nutritional Coaching (Basic)',
      'Access to Live Virtual Fitness Classes (Limited)',
    ],
  },
  premium: {
    name: 'Premium Wellness',
    price: 150,
    benefits: [
      'Personalized Fitness Plan',
      'Nutritional Coaching (Advanced)',
      'Mental Wellness Workshops',
      'Access to Live Virtual Fitness Classes (Unlimited)',
    ],
  },
  ultimate: {
    name: 'Ultimate Wellness',
    price: 250,
    benefits: [
      'Personalized Fitness Plan (Advanced)',
      'Nutritional Coaching (Premium)',
      'Mental Wellness Workshops',
      'Live Virtual Fitness Classes (Unlimited)',
      'Health Assessment and Goal Setting',
      'Exclusive Access to Wellness Challenges',
    ],
  },
};

export default function Plans() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-medium">Choose Your Path to Wellness</h2>

      <div className="flex flex-col gap-7">
        {Object.entries(planList).map((plan, i) => (
          <PlanCard plan={plan[1]} key={plan[0]} itemNumber={i} />
        ))}
      </div>
    </section>
  );
}

function PlanCard({ plan, itemNumber }) {
  return (
    <div
      className={`rounded p-5 min-h-[640px] flex flex-col justify-between mt-7 ${
        itemNumber % 2 === 0
          ? 'border-green-500 border-[4px]'
          : 'bg-green-500 text-white'
      }`}
    >
      <div>
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <div className="flex items-baseline gap-1 my-5">
          <p className="text-4xl font-medium">${plan.price}</p>
          <p className="text-sm">per month</p>
        </div>
        <div>
          <p className="text-lg font-medium">Includes</p>
          <ul className="flex flex-col gap-5 mt-5">
            {plan.benefits.map((benefit, i) => (
              <div className="flex items-center gap-2" key={i}>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <li className="flex-1 text-lg font-medium">{benefit}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href={'/'}
        className={`flex items-center justify-center w-full h-12 text-xl font-bold rounded ${
          itemNumber % 2 === 0
            ? 'text-white bg-green-500'
            : 'bg-green-100 text-[#083A08]'
        }`}
      >
        Get Started Now!
      </Link>
    </div>
  );
}
