import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import EditBookingPanelAdmin from '@/components/EditBookingPanelAdmin';
import { getServerSession } from 'next-auth';

export default async function page({
	params,
}: {
	params: {
		bid: string;
	};
}) {
	const session = await getServerSession(authOptions);
	if (!session) return null;

	return <EditBookingPanelAdmin bid={params.bid} token={session.user.token} />;
}
