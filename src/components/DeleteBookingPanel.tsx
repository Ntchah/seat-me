'use client';

import NavBar from '@/components/NavBar';
import deleteBooking from '@/libs/deleteBooking';
import { useRouter } from 'next/navigation';
import { BookingByIdJson } from '../../interface';

export default function DeleteRestaurantPanel({
	rid,
	token,
	bookingJsonReady,
}: {
	rid: string;
	token: string;
	bookingJsonReady: BookingByIdJson;
}) {
	const router = useRouter();
	const handleSubmit = async () => {
		try {
			await deleteBooking(rid, token);
			alert('Successfully deleted booking.');
			router.push('/manage/booking');
			router.refresh();
		} catch (error) {
			console.error('Error deleting booking:', error);
			alert('Failed to delete booking. Please try again.');
		}
	};

	const date = new Date(bookingJsonReady.data.bookingDate);
	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	};
	const formattedDate = date.toLocaleDateString('en-GB', options);
	const createDate = new Date(bookingJsonReady.data.bookingDate);
	const formattedCreateDate = createDate.toLocaleDateString('en-GB', options);

	return (
		<div className="flex flex-row">
			<NavBar />
			<main className="flex flex-col items-start px-24 py-32 bg-black w-full min-h-screen text-white">
				<p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
					Booking Detail
				</p>
				<div className="relative z-20 flex flex-row justify-center w-3/4 items-top justify-items-center gap-8 pt-12 pb-6">
					<div className="relative z-20 flex flex-col justify-start self-center items-start w-full">
						<div className="relative z-20 flex flex-col max-w-lg space-y-2 p-8 w-full bg-transparent border border-white rounded-lg">
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">User</p>
								<p className="text-white text-sm font-light py-2">
									{bookingJsonReady.data.user}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">
									Restaurant Name
								</p>
								<p className="text-white text-sm font-light py-2">
									{bookingJsonReady.data.restaurant.name}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">
									Booking Date
								</p>
								<p className="text-white text-sm font-light py-2">
									{formattedDate}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">
									Number of Guests
								</p>
								<p className="text-white text-sm font-light py-2">
									{bookingJsonReady.data.numOfGuests}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">
									Created At
								</p>
								<p className="text-white text-sm font-light py-2">
									{formattedCreateDate}
								</p>
							</div>
						</div>
						<div className="py-6 space-x-2 flex justify-start items-start justify-items-start gap-4">
							<button
								onClick={handleSubmit}
								className="w-56 h-10 z-10 border-[1px] rounded-full border-red-600 bg-red-600 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
							>
								Confirm Delete Booking
							</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
