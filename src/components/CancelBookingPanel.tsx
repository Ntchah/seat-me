'use client';

import deleteBooking from '@/libs/deleteBooking';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CancelBookingPanel({
	bid,
	token,
	restaurant,
	reserveDate,
	numOfGuests,
}: {
	bid: string;
	token: string;
	restaurant: string;
	reserveDate: string;
	numOfGuests: string;
}) {
	const router = useRouter();
	const handleSubmit = async () => {
		try {
			await deleteBooking(bid, token);
			router.push('/mybooking');
			router.refresh();
		} catch (error) {
			console.error('Error cancelling booking:', error);
			alert('Failed to cancel booking. Please try again.');
		}
	};

	const date = new Date(reserveDate);
	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	};
	const formattedDate = date.toLocaleDateString('en-GB', options);

	return (
		<div className="relative w-full h-screen py-16 bg-black overflow-hidden">
			<Image
				src="/img/footer-background.jpeg"
				alt="Background"
				fill
				className="absolute inset-0 z-0 object-cover"
			/>
			<div className="absolute inset-0 bg-black opacity-70 z-10" />

			<div className="relative z-20 flex justify-between items-center">
				<Image
					src="/img/Subtract.png"
					alt="Left Decor"
					width={80}
					height={80}
				/>
				<h1 className="text-white font-eglen text-4xl md:text-5xl lg:text-6xl">
					Cancel Booking
				</h1>
				<Image
					src="/img/Subtract-decor.png"
					alt="Right Decor"
					width={80}
					height={80}
				/>
			</div>

			<div className="relative z-20 flex flex-col max-w-lg mx-auto mt-8 space-y-2 p-8 w-3/4 bg-transparent border border-white rounded-lg">
				<p className="text-white text-center text-lg font-semibold pb-2">
					Reservation Summary
				</p>
				<div className="flex justify-between items-center">
					<p className="text-white text-sm font-medium py-2">Restaurant</p>
					<p className="text-white text-sm font-light py-2">{restaurant}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-white text-sm font-medium py-2">Date</p>
					<p className="text-white text-sm font-light py-2">{formattedDate}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-white text-sm font-medium py-2">
						Number of guests
					</p>
					<p className="text-white text-sm font-light py-2">{numOfGuests}</p>
				</div>
			</div>

			<div className="relative z-20 mt-16 flex justify-center">
				<button
					onClick={handleSubmit}
					className="w-30 h-10 z-10  rounded-full  bg-red-600 hover:bg-red-800 text-white text-sm  px-4 py-2.5 flex items-center justify-center shadow-lg transition"
				>
					Confirm Cancel Booking
				</button>
			</div>
		</div>
	);
}
