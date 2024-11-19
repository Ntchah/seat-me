import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import BookingTableRow from '@/components/BookingTableRow';
import NavBar from '@/components/NavBar';
import getBookings from '@/libs/getBookings';
import { getServerSession } from 'next-auth';
import { BookingItem, BookingJson } from '../../../../interface';

export default async function page() {
	const session = await getServerSession(authOptions);
	if (!session) return null;
	const bookingsJson: Promise<BookingJson> = getBookings(session.user.token);
	const bookingsJsonReady = await bookingsJson;

	function formatDate(unformattedDate: string): string {
		const date = new Date(unformattedDate);
		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		};
		return date.toLocaleDateString('en-GB', options);
	}

	return (
		<div className="flex flex-row">
			<NavBar />
			<main className="flex flex-col items-start px-16 py-32 bg-black w-full min-h-screen text-white">
				<p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
					Booking Management
				</p>

				<div className="w-full max-w-4xl overflow-hidden rounded-lg mt-4">
					<div className="overflow-auto">
						<table className="w-full table-auto text-left">
							<thead className="text-white text-sm border-b border-white font-medium">
								<tr>
									<th className="px-4 py-2">User</th>
									<th className="px-4 py-2">Restaurant</th>
									<th className="px-4 py-2">Booking Date</th>
									<th className="px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{bookingsJsonReady.data.map((booking: BookingItem, index) => (
									<BookingTableRow
										key={index}
										userName={booking.user}
										restaurantName={booking.restaurant.name}
										bookingDate={formatDate(booking.bookingDate)}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</div>
	);
}
