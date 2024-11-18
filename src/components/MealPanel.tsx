import Image from 'next/image';
import MealCard from './MealCard';

export default function MealPanel() {
	return (
		<div className="overflow-hidden w-full h-full py-16 relative z-10">
			<Image
				src="/img/footer-background.jpeg"
				alt="Footer Background"
				fill={true}
				objectFit="cover"
				className="absolute inset-0 z-0"
			/>
			<div className="absolute inset-0 bg-black opacity-70 z-10" />
			<div className="flex justify-between items-center gap-8">
				<div className="z-10 w-10 lg:w-16">
					<Image
						src="/img/Subtract.png"
						alt="Left Decor"
						layout="intrinsic"
						objectFit="contain"
						className="max-w-full"
						width={80}
						height={80}
					/>
				</div>
				<div className="relative z-10 flex flex-col justify-center items-center h-full text-white gap-2">
					<p className="text-md lg:text-xl">Your next meal awaits.</p>
					<p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
						The Choices are Yours
					</p>
				</div>
				<div className="z-10 w-10 lg:w-16">
					<Image
						src="/img/Subtract-decor.png"
						alt="Right Decor"
						layout="intrinsic"
						objectFit="contain"
						className="max-w-full"
						width={80}
						height={80}
					/>
				</div>
			</div>
			<div className="flex flex-row px-16 lg:px-40 py-16 gap-20 overflow-scroll">
				<MealCard
					name="Sira Sushi"
					imgSrc="/img/sira-sushi.jpeg"
					categories={['japanese', 'fine dining']}
				/>
				<MealCard
					name="Sira Sushi"
					imgSrc="/img/sira-sushi.jpeg"
					categories={['japanese', 'fine dining']}
				/>
				<MealCard
					name="Sira Sushi"
					imgSrc="/img/sira-sushi.jpeg"
					categories={['japanese', 'fine dining']}
				/>
				<MealCard
					name="Sira Sushi"
					imgSrc="/img/sira-sushi.jpeg"
					categories={['japanese', 'fine dining']}
				/>
			</div>
			<div className="flex flex-col items-center z-10 text-white relative pt-20">
				<p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
					Your taste buds
				</p>
				<p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
					deserves the best.
				</p>
			</div>
		</div>
	);
}
