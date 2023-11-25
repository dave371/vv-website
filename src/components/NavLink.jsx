import Link from 'next/link';

export default function NavLink({ path, name, className = '' }) {
  return (
    <Link className={className} href={path}>
      {name}
    </Link>
  );
}
