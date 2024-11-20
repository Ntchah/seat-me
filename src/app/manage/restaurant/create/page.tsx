import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import CreateRestaurantPanel from '@/components/CreateRestaurantPanel';
import { getServerSession } from 'next-auth';

export default async function page() {
	const session = await getServerSession(authOptions);
	if (!session) return null;

	return <CreateRestaurantPanel token={session.user.token} />;
}
