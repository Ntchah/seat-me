import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import CancelBookingPanel from '@/components/CancelBookingPanel';
import getBooking from '@/libs/getBooking';
import { getServerSession } from 'next-auth';
import { BookingByIdJson } from '../../../../../interface';

export default async function page({ params }: { params: { bid: string } }) {
	const session = await getServerSession(authOptions);
	if (!session) return null;
	const bookingJson: Promise<BookingByIdJson> = getBooking(
		params.bid,
		session.user.token,
	);
	const bookingJsonReady = await bookingJson;
	return (
		<CancelBookingPanel
			bid={params.bid}
			token={session.user.token}
			restaurant={bookingJsonReady.data.restaurant.name}
			reserveDate={bookingJsonReady.data.bookingDate}
			numOfGuests={bookingJsonReady.data.numOfGuests}
		/>
	);
}
