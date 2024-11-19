import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import NavBar from '@/components/NavBar';
import getBooking from '@/libs/getBooking';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { BookingByIdJson } from '../../../../../../interface';

export default async function page({
	params,
}: {
	params: {
		bid: string;
	};
}) {
	const session = await getServerSession(authOptions);
	if (!session) return null;
	const bookingJson: Promise<BookingByIdJson> = getBooking(
		params.bid,
		session.user.token,
	);
	const bookingJsonReady = await bookingJson;

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
							<Link
								href={`/manage/booking/edit/${params.bid}`}
								className="w-36 h-10 z-10 border-[1px] rounded-full border-gray-500 bg-gray-500 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
							>
								Edit Booking
							</Link>
							<Link
								href={`/manage/booking/delete/${params.bid}`}
								className="w-40 h-10 z-10 border-[1px] rounded-full border-red-600 bg-red-600 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
							>
								Delete Booking
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
