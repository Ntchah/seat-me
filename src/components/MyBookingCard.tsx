import getRestaurant from '@/libs/getRestaurant';
import { RestaurantByIdJson } from '../../interface';
import BookingCard from './BookingCard';

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

	return (
		<BookingCard
			index={index}
			id={id}
			name={name}
			imgSrc={restaurantJsonReady.data.picture}
			reserveDate={reserveDate}
		/>
	);
}
