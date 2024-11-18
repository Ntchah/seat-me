import Image from 'next/image';

const categories: { name: string; imgSrc: string }[] = [
	{ name: 'Near me', imgSrc: '/img/near-me.png' },
	{ name: 'All you can eat', imgSrc: '/img/all-you-can-eat.png' },
	{ name: 'Hot spot', imgSrc: '/img/hot-spot.png' },
	{ name: 'Fine Dine', imgSrc: '/img/fine-dine.png' },
	{ name: 'Premium', imgSrc: '/img/premium.png' },
	{ name: 'Thai Cusine', imgSrc: '/img/thai-cusine.png' },
	{ name: 'Others', imgSrc: '/img/others.png' },
];

export default function RestaurantPanel() {
	return (
		<div className="overflow-hidden w-full h-full relative z-10 px-16 flex flex-col items-center">
			<Image
				src="/img/footer-background.jpeg"
				alt="Footer Background"
				fill={true}
				objectFit="cover"
				className="absolute inset-0 z-0"
			/>
			<div className="absolute inset-0 bg-black opacity-70 z-10" />
			<div className="flex flex-row items-center gap-8 pb-16 w-full justify-items-center justify-center">
				<div className="h-0 w-1/3 border-t-2 border-t-white z-20"></div>
				<p className="text-white z-20">Find your favorite and book now</p>
				<div className="h-0 w-1/3 border-t-2 border-t-white z-20"></div>
			</div>
			<div className="flex flex-wrap gap-10 z-20">
				{categories.map((category, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-white rounded-lg p-2 relative"
					>
						<img
							src={category.imgSrc}
							alt={category.name}
							className="w-12 h-12 object-cover mb-2"
						/>
						<span className="text-sm whitespace-nowrap z-20">
							{category.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}