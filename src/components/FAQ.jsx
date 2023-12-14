'use client';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import * as Accordion from '@radix-ui/react-accordion';

const faqList = [
  {
    question: 'How do I get started with VitalityVault?',
    answer:
      "Getting started is easy! Simply choose a plan, sign up, and you'll gain instant access to personalized wellness plans and a supportive community.",
  },
  {
    question: 'Can I cancel or change my plan at any time?',
    answer:
      'Yes, you have the flexibility to modify or cancel your plan at any time through your account settings.',
  },
  {
    question: "What's included in the Live Virtual Fitness Classes?",
    answer:
      'Our live classes cover a range of fitness styles and are led by certified instructors. With Premium and Ultimate plans, enjoy unlimited access to these invigorating sessions.',
  },
  {
    question: 'How personalized are the fitness and nutrition plans?',
    answer:
      'Extremely! Our plans are crafted based on your individual goals, fitness level, and preferences, ensuring a tailored approach to your wellness journey.',
  },
  {
    question:
      'Are there additional costs for exclusive challenges in the Ultimate Wellness plan?',
    answer:
      "No, exclusive challenges are included in the Ultimate Wellness plan at no extra cost. They're a fantastic way to add fun and motivation to your fitness routine.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-medium">Common Questions, Clear Answers</h2>

      <FAQAccordion />
    </section>
  );
}

function FAQAccordion() {
  return (
    <Accordion.Root className="mt-7" collapsible defaultValue="item-1">
      {faqList.map((item, i) => (
        <AccordionItem key={i} value={`item-${i + 1}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion.Root>
  );
}

function AccordionItem({ children, className, ...props }) {
  return (
    <Accordion.Item
      className={`mt-px overflow-hidden first:rounded-t last:rounded-b ${className}`}
      {...props}
    >
      {children}
    </Accordion.Item>
  );
}

function AccordionTrigger({ children, className, ...props }) {
  return (
    <Accordion.Header>
      <Accordion.Trigger
        className={`w-full text-left text-white bg-green-500 min-h-[48px] px-4 py-2 text-lg font-medium group flex justify-between items-center ${className}`}
        {...props}
      >
        <div className="flex-1">{children}</div>
        <ChevronDownIcon className="w-5 h-5 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-[400ms] group-data-[state=open]:rotate-180" />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

function AccordionContent({ children, className, ...props }) {
  return (
    <Accordion.Content
      className={`bg-green-100 text-[#051F05] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden${className}`}
      {...props}
    >
      <div className="px-5 py-2">{children}</div>
    </Accordion.Content>
  );
}
