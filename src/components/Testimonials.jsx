'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

const testimonial = [
  {
    name: 'Sarah M.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsam fuga. Dolorum tenetur, minus suscipit esse nesciunt vero soluta hic commodi maxime provident? Non, eaque enim exercitationem architecto dolore temporibus?',
  },
  {
    name: 'David P.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsam fuga. Dolorum tenetur, minus suscipit esse nesciunt vero soluta hic commodi maxime provident? Non, eaque enim exercitationem architecto dolore temporibus?',
  },
  {
    name: 'Michael R.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsam fuga. Dolorum tenetur, minus suscipit esse nesciunt vero soluta hic commodi maxime provident? Non, eaque enim exercitationem architecto dolore temporibus?',
  },
];

export default function Testimonials() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-medium text-white">
        Transformative Journeys, Shared Stories
      </h2>

      <div className="mt-7">
        <Carousel />
      </div>
    </section>
  );
}

function TestimonialCard({ name, description }) {
  return (
    <div className="relative flex flex-col justify-center p-12 bg-green-100 rounded aspect-square">
      <p className="font-medium text-[#083A08]">{description}</p>
      <div className="flex gap-3 mt-5">
        <p className="text-lg font-bold text-[#083A08]">{name}</p>
        <div className="flex gap-2">
          <div className="flex items-center justify-center">
            <StarIcon className="w-[22px] h-[22px] text-[#083A08]" />
          </div>
          <div className="flex items-center justify-center">
            <StarIcon className="w-[22px] h-[22px] text-[#083A08]" />
          </div>
          <div className="flex items-center justify-center">
            <StarIcon className="w-[22px] h-[22px] text-[#083A08]" />
          </div>
          <div className="flex items-center justify-center">
            <StarIcon className="w-[22px] h-[22px] text-[#083A08]" />
          </div>
          <div className="flex items-center justify-center">
            <StarIcon className="w-[22px] h-[22px] text-[#083A08]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === testimonial.length - 1) {
      setIndex(0);
      return;
    }

    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index === 0) {
      setIndex(testimonial.length - 1);
      return;
    }

    setIndex((prev) => prev - 1);
  };

  return (
    <div>
      <div className="relative">
        <TestimonialCard
          name={testimonial[index].name}
          description={testimonial[index].description}
        />
        <div className="absolute inset-y-0 flex items-center justify-center -left-3">
          <button
            onClick={prev}
            className="p-1 text-white bg-green-900 rounded-full"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="absolute inset-y-0 flex items-center justify-center -right-3">
          <button
            onClick={next}
            className="p-1 text-white bg-green-900 rounded-full"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 mt-3">
        {Object.entries(testimonial).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${
              i === index ? 'bg-green-900' : 'bg-green-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
