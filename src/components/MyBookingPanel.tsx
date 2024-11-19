import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import getBookings from '@/libs/getBookings';
import { LinearProgress } from '@mui/material';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';
import { BookingItem, BookingJson } from '../../interface';
import MyBookingCard from './MyBookingCard';

export default async function MyBookingPanel() {
	const session = await getServerSession(authOptions);
	if (!session) return null;
	const bookingsJson: Promise<BookingJson> = getBookings(session.user.token);
	const bookingsJsonReady = await bookingsJson;

	return (
		<div className="flex justify-center items-center w-full h-full relative z-10">
			<Suspense
				fallback={
					<p>
						Loading...
						<LinearProgress />
					</p>
				}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 z-10 relative pt-12 lg:pt-20 px-4 lg:px-16">
					{bookingsJsonReady.data.map((booking: BookingItem, index: number) => (
						<MyBookingCard
							index={index + 1}
							id={booking._id}
							name={booking.restaurant.name}
							restaurantId={booking.restaurant.id}
							reserveDate={booking.bookingDate}
						/>
					))}
				</div>
			</Suspense>
		</div>
	);
}
