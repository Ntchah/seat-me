import getRestaurant from '@/libs/getRestaurant';
import Image from 'next/image';
import Link from 'next/link';
import { RestaurantByIdJson } from '../../interface';

export default async function MyBookingCard({
	index,
	id,
	name,
	restaurantId,
	reserveDate,
}: {
	index: number;
	id: string;
	name: string;
	restaurantId: string;
	reserveDate: string;
}) {
	const restaurantJson: Promise<RestaurantByIdJson> =
		getRestaurant(restaurantId);
	const restaurantJsonReady = await restaurantJson;

	const date = new Date(reserveDate);
	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	};
	const formattedDate = date.toLocaleDateString('en-GB', options);



	return (
		<div className="flex flex-col justify-start shadow-lg">
			<span
				key={index}
				className="w-36 h-8 z-10 border-[1px] rounded-full border-white flex items-center justify-center text-white font-light py-2 text-sm"
			>
				Reservation #{index}
			</span>

			<p className="font-eglen text-5xl text-white text-left text-wrap max-w-[270px] py-2 pb-4">
				{name}
			</p>
			<p className="text-md text-white text-left font-light text-wrap max-w-[270px] py-2">
				{formattedDate}
			</p>

			<Image
				src={restaurantJsonReady.data.picture}
				alt="restaurant image"
				className="w-[270px] h-[400px] object-cover mb-4"
				width={100}
				height={100}
			/>

			<div className="w-full py-2 space-x-2 flex justify-between">
				<Link
					href={`/managebooking/edit/${id}`}
					className="w-30 h-10 z-10 border-[1px] rounded-full border-gray-500 bg-gray-500 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
				>
					Edit booking
				</Link>
				<Link
					href={`/managebooking/cancel/${id}`}
					className="w-36 h-10 z-10 border-[1px] rounded-full border-red-600 bg-red-600 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
				>
					Cancel booking
				</Link>
			</div>
		</div>
	);
}
