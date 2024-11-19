'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function NavBar(): JSX.Element {
    const pathname = usePathname();

    const getLinkClassName = (path: string): string =>
        pathname === path
            ? "font-semibold underline underline-offset-4 decoration-1  text-white hover:font-bold"
            : "font-light text-gray-300 hover:font-semibold";


	return (
		<div className="relative w-1/6 h-screen">
			<Image
				src="/img/goldnavbar.png"
				alt="Navbar Background"
				fill
				className="object-cover absolute inset-0 -z-10"
			/>

            <div className="flex flex-col py-40 items-center space-y-4">
                <Link href="/manage/restaurant" className={getLinkClassName("/manage/restaurant")}>
                    Restaurant
                </Link>
                <Link href="/manage/booking" className={getLinkClassName("/manage/booking")}>
                    Booking
                </Link>
            </div>
        </div>
    );

}
