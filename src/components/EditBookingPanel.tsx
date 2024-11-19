'use client';

import DateReserve from '@/components/DateReserve';
import putBooking from '@/libs/putBooking';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EditBookingPanel({
	bid,
	token,
}: {
	bid: string;
	token: string;
}) {
	const router = useRouter();
	const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
	const [numGuest, setNumGuest] = useState<number>(1);

	const incrementGuest = () => setNumGuest(numGuest + 1);
	const decrementGuest = () => setNumGuest(Math.max(1, numGuest - 1)); // Ensure minimum guest count is 1

	const handleSubmit = async () => {
		if (!reserveDate) {
			alert('Reservation date is required.');
			return;
		}
		if (numGuest < 1) {
			alert('Number of guests must be at least 1.');
			return;
		}

		const bookingDate = dayjs(reserveDate).format('YYYY-MM-DD');
		const bookingCreatedAt = new Date().toISOString();
		const bookingCreatedAtString = dayjs(bookingCreatedAt).format('YYYY-MM-DD');

		try {
			await putBooking(
				bid,
				token,
				bookingDate,
				numGuest,
				bookingCreatedAtString,
			);
			alert('Edited Booking successfully!');
			router.push('/mybooking');
			router.refresh();
		} catch (error) {
			console.error('Error posting booking:', error);
			alert('Failed to edit booking. Please try again.');
		}
	};

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
					Edit Booking
				</h1>
				<Image
					src="/img/Subtract-decor.png"
					alt="Right Decor"
					width={80}
					height={80}
				/>
			</div>

			<div className="relative z-20 flex flex-col max-w-2xl mx-auto mt-8 space-y-6 p-10 w-3/4 bg-transparent border border-white rounded-lg">
				<div className="flex justify-between items-center">
					<span className="text-white text-sm font-light w-56 text-center border border-white rounded-full py-2">
						1. Edit Reservation Date
					</span>
					<div className="relative">
						<div className="absolute bg-white w-1/2  h-full"></div>
						<DateReserve
							onDateChange={(value: Dayjs) => setReserveDate(value)}
						/>
					</div>
				</div>

				<div className="flex justify-between items-center">
					<span className="text-white text-sm font-light w-56 text-center border border-white rounded-full py-2">
						2. Edit Number of Guests
					</span>
					<div className="flex items-center gap-4">
						<button
							onClick={decrementGuest}
							className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-200"
							aria-label="Decrease"
						>
							<RemoveIcon fontSize="small" />
						</button>
						<input
							type="number"
							min="1"
							value={numGuest}
							onChange={(e) => {
								const value = parseInt(e.target.value, 10);
								if (!isNaN(value) && value > 0) setNumGuest(value);
							}}
							className="w-16 text-center border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-yellow-400"
						/>
						<button
							onClick={incrementGuest}
							className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-200"
							aria-label="Increase"
						>
							<AddIcon fontSize="small" />
						</button>
					</div>
				</div>
			</div>

			<div className="relative z-20 mt-16 flex justify-center">
				<button
					onClick={handleSubmit}
					className="w-30 h-10 z-10  rounded-full  bg-yellow-400 hover:bg-yellow-500 text-white text-sm  px-4 py-2.5 flex items-center justify-center shadow-lg transition"
				>
					Confirm Edit Booking
				</button>
			</div>
		</div>
	);
}
