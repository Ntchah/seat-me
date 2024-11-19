'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
	return (
		<button
			onClick={() => {
				if (confirm('Are you sure you want to sign out?')) {
					signOut({ callbackUrl: '/' });
				}
			}}
			className="flex flex-row items-center gap-3 px-6 py-2 border border-white rounded-full text-white text-sm font-light hover:bg-white hover:text-black transition-colors duration-300"
		>
			<p>Sign Out</p>
		</button>
	);
}
