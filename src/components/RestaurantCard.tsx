import { Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function RestaurantCard({
	name,
	imgSrc,
	category,
	score,
	href,
}: {
	name: string;
	imgSrc: string;
	category: string;
	score: number;
	href: string;
}) {
	return (
		<div className="flex flex-col items-center shadow-lg">
			<Image
				src={imgSrc}
				alt={name}
				className="w-[270px] h-[400px] object-cover mb-4"
				width={100}
				height={100}
			/>
			<div className="relative flex flex-wrap gap-3 justify-start w-full py-2">
				<div className="bg-white text-black rounded-full px-3 py-0.5 text-xs">
					{category}
				</div>
			</div>
			<p className="font-eglen text-5xl text-white text-left text-wrap max-w-[270px] py-2 w-full">
				{name}
			</p>
			<Rating
				value={score}
				precision={0.5}
				readOnly
				size="small"
				className="w-full justify-start"
				sx={{ color: '#A17027' }}
			/>
			<div className="w-full py-6">
				<Link
					href={href}
					className="w-28 h-10 z-10 border-[1px] rounded-full border-white text-white justify-left px-4 py-2.5"
				>
					book now
				</Link>
			</div>
		</div>
	);
}
