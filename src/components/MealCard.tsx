import Image from 'next/image';

export default function MealCard({
	name,
	imgSrc,
	categories,
}: {
	name: string;
	imgSrc: string;
	categories: string[];
}) {
	return (
		<div className="relative w-[300px] min-w-[300px] h-[600px] min-h-[300px] rounded-full overflow-hidden border-[1px] z-10">
			<Image src={imgSrc} alt="Meal Image" fill className="object-cover" />
			<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
			<div className="relative z-20 text-white text-left py-[300px] px-4 flex flex-col gap-2">
				<div className="flex flex-wrap gap-2">
					{categories.map((category, index) => (
						<span
							key={index}
							className="bg-white text-black rounded-full px-3 py-0.5 text-sm"
						>
							{category}
						</span>
					))}
				</div>
				<p className="font-eglen text-5xl">{name}</p>
			</div>
		</div>
	);
}
