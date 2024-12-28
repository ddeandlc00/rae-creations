'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services' },
    { name: 'BOOK APPOINTMENT', href: '/appointment' },
    { name: 'ABOUT', href: '/about' },
];

export default function NavLinksFooter() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-xs hover:text-emerald-800 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <p className="md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}