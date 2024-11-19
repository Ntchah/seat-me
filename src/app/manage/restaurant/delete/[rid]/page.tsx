import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import DeleteRestaurantPanel from '@/components/DeleteRestaurantPanel';
import getRestaurant from '@/libs/getRestaurant';
import { getServerSession } from 'next-auth';
import { RestaurantByIdJson } from '../../../../../../interface';

export default async function page({
	params,
}: {
	params: {
		rid: string;
	};
}) {
	const session = await getServerSession(authOptions);
	if (!session) return null;
	const restaurantJson: Promise<RestaurantByIdJson> = getRestaurant(params.rid);
	const restaurantJsonReady = await restaurantJson;

	return (
		<DeleteRestaurantPanel
			rid={params.rid}
			token={session.user.token}
			restaurantJsonReady={restaurantJsonReady}
		/>
	);
}
