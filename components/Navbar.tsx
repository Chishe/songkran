'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaHome } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
export default function Navbar() {
    const pathname = usePathname();

    const getPageTitle = () => {
        switch (pathname) {
            case "/quality-result":
                return "Quality result";
            case "/document-record":
                return "Document record";
            case "/history-problem":
                return "History problem";
            default:
                return "Machine condition";
        }
    };

    return (
        <nav className="w-full px-6 py-4 bg-[#0b0153] border-b border-gray-200 flex items-center justify-between">
            {/* Logo Section */}
            <div className="h-12 w-36 lg:w-48 lg:h-10">
                <Image
                    src="/logo-iw9kW_RC.png"
                    alt="Company Logo"
                    layout="responsive"
                    width={192}
                    height={40}
                    className="w-full h-full"
                />
            </div>

            {/* Page Title */}
            <h1 className="hidden text-base font-extrabold lg:text-2xl md:block text-[#343C6A]">
                {getPageTitle()}
            </h1>

            {/* Menu Section */}
            <ul className="flex flex-col gap-2 text-foreground">
                <div className="flex gap-4">
                    <li><Link href="#" className="hover:underline">Over detail</Link></li>
                    <li><Link href="/quality-result" className="hover:underline">Quality result</Link></li>
                    <li><Link href="/document-record" className="hover:underline">Document record</Link></li>
                    <li><Link href="#" className="hover:underline">Video record</Link></li>
                </div>
                <div className="flex gap-4">
                    <li><Link href="#" className="hover:underline">Production</Link></li>
                    <li><Link href="#" className="hover:underline">Maintenance</Link></li>
                    <li><Link href="/machine-condition" className="hover:underline">Machine condition</Link></li>
                    <li><Link href="/history-problem" className="hover:underline">History problem</Link></li>
                </div>
            </ul>

            {/* Icon Section */}
            <div className="flex gap-4 text-foreground">
                <Link href="#" className="hover:underline text-2xl"><FaHome /></Link>
                <Link href="#" className="hover:underline text-2xl"><FaPhoneVolume /></Link>
            </div>
        </nav>
    );
}
