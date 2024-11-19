'use client';
import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function page() {
	return (
		<div className="flex flex-row space-x-16">
			<NavBar />
			<div className="py-32">
				<p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap text-white">
					Management Dashboard
				</p>
				<Link
					href="/manage/restaurant"
					className="w-72 h-10 z-10 mt-10 rounded-full border border-white text-white text-sm  px-4 py-2.5 flex items-center justify-center hover:bg-white hover:text-black"
				>
					Manage Restaurant---{'>'}
				</Link>
				<Link
					href="/manage/booking"
					className="w-72 h-10 z-10 mt-6 rounded-full border border-white text-white text-sm  px-4 py-2.5 flex items-center justify-center hover:bg-white hover:text-black"
				>
					Manage Booking---{'>'}
				</Link>
			</div>
		</div>
	);
}
