import Image from 'next/image';

export default function LandingBanner() {
	return (
		<div className="relative w-full">
			<Image
				src="/img/landing-banner.png"
				alt="Banner"
				objectFit="cover"
				width={2000}
				height={2000}
			/>
		</div>
	);
}
