import Link from 'next/link';
import BrandLogo from './BrandLogo';

const footerList = {
  resources: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ],
  legal: [
    { name: 'Terms', path: '/legal/tos' },
    { name: 'Privacy', path: '/legal/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="flex flex-col p-4 mt-12 text-white bg-green-900 gap-7">
      <BrandLogo />

      <div>
        <h2 className="text-lg font-bold">Resources</h2>
        <ul className="flex flex-col gap-2 mt-2">
          {footerList.resources.map((resource, i) => (
            <li key={i}>
              <Link className="text-lg" href={resource.path}>
                {resource.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold">Legal</h2>
        <ul className="flex flex-col gap-2 mt-2">
          {footerList.legal.map((item, i) => (
            <li key={i}>
              <Link className="text-lg" href={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
