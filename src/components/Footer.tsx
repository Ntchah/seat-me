import Image from 'next/image';

export default function Footer() {
	return (
		<div className="overflow-hidden w-full h-48 p-8 relative">
			<Image
				src="/img/footer-background.jpeg"
				alt="Footer Background"
				fill={true}
				objectFit="cover"
				className="absolute inset-0 z-0"
			/>
			<div className="absolute inset-0 bg-black opacity-80 z-10" />
			<div className="relative z-10 flex flex-col justify-center items-center h-full text-white gap-2">
				<div className="w-48">
					<Image
						src="/img/SeatMe-white.png"
						alt="Footer Background"
						layout="intrinsic"
						objectFit="contain"
						className="max-w-full"
						width={200}
						height={200}
					/>
				</div>
				<p className="text-center">Book your table, your way.</p>
				<p className="text-center font-thin">
					© 2024 SeatMe. All Rights Reserved.
				</p>
			</div>
		</div>
	);
}
