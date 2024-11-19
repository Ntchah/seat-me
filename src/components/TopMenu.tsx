import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import SignOutButton from './SignOutButton';
import TopMenuItem from './TopMenuItem';

interface UserProfile {
	name: string;
	email: string;
	tel: string;
	role: string;
	password: string;
	createdAt: string;
}

export default async function TopMenu() {
	const session = await getServerSession(authOptions);

	const profileData: UserProfile = session
		? await getUserProfile(session.user.token)
		: null;

	return (
		<div className="fixed z-40 w-full h-16 lg:h-24 py-4 lg:py-7 px-5 lg:px-12 gap-3 flex item-center justify-between">
			<Link href="/" passHref>
				<Image src="/img/logo.png" alt="vsclogo" width={150} height={50} />
			</Link>
			<div className="flex items-center gap-4">
				{session ? (
					<div className="flex items-center gap-4 font-light text-sm">
						{profileData.role === 'user' ? (
							<TopMenuItem title="my bookings" pageRef="/mybooking" />
						) : (
							<TopMenuItem title="manage" pageRef="/manage" />
						)}
						<TopMenuItem title="profile" pageRef="/profile" />
						<p className="text-white">Welcome back, {session.user.name}!</p>
						<SignOutButton />
					</div>
				) : (
					<Link
						href="/login"
						className="flex flex-row items-center gap-3 px-6 py-2 border border-white rounded-full text-white text-sm font-light hover:bg-white hover:text-black transition-colors duration-300"
					>
						<p>Sign In</p>
					</Link>
				)}
			</div>
		</div>
	);
}
