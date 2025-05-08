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
            case "/machine-condition":
                return "Machine condition outter fin forming";
            case "/document-record":
            case "/document-record-1":
            case "/document-record-2":
            case "/document-record-3":
            case "/document-record-4":
            case "/document-record-5":
                return "Machine condition NB furnace";
            case "/suface-condition":
                return "Suface treatment condition";
            case "/history-problem":
                return "History problem";
            case "/quality-result-surface":
                return "Quality result Surface";
            default:
                return "Quality result";
        }
    };


    const getLinkClass = (path: string) =>
        `hover:underline ${pathname === path ? 'text-red-500 font-bold' : ''}`;

    return (
        <nav className="fixed top-0 left-0 w-full z-15 px-6 py-4 bg-[#0b0153] border-b border-gray-200 flex items-center justify-between">
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
                    <li><Link href="#" className="hover:underline text-gray-500" aria-disabled>Over detail</Link></li>
                    <li><Link href="/" className={getLinkClass("/")}>Quality result</Link></li>
                    <li><Link href="/quality-result-surface" className={getLinkClass("/quality-result-surface")}>Quality result Surface</Link></li>
                    <li><Link href="/document-record" className={getLinkClass("/document-record")}>Machine condition NB furnace</Link></li>
                    <li><Link href="#" className="hover:underline text-gray-500" aria-disabled>Video record</Link></li>
                    <li><Link href="#" className="hover:underline text-gray-500" aria-disabled>Production</Link></li>
                </div>
                <div className="flex gap-4">
                    <li><Link href="#" className="hover:underline text-gray-500" aria-disabled>Maintenance</Link></li>
                    <li><Link href="/suface-condition" className={getLinkClass("/suface-condition")}>Suface treatment condition</Link></li>
                    <li><Link href="/machine-condition" className={getLinkClass("/machine-condition")}>Machine condition outter fin forming</Link></li>
                    <li><Link href="/history-problem" className={getLinkClass("/history-problem")}>History problem</Link></li>
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
