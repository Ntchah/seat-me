import Footer from '@/components/Footer';
import TopMenu from '@/components/TopMenu';
import NextAuthProvider from '@/providers/NextAuthProvider';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SeatMe',
	description: 'Restaurant Booking App',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const nextAuthSession = await getServerSession(authOptions);
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextAuthProvider session={nextAuthSession}>
					<TopMenu />
					{children}
					<Footer />
				</NextAuthProvider>
			</body>
		</html>
	);
}
