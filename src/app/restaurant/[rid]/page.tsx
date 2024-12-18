import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import BookingPanel from '@/components/BookingPanel';
import getRestaurant from '@/libs/getRestaurant';
import { Rating } from '@mui/material';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { RestaurantByIdJson } from '../../../../interface';

export default async function RestaurantPage({
	params,
}: {
	params: { rid: string };
}) {
	const session = await getServerSession(authOptions);
	if (!session) return null;

	const restaurantJson: Promise<RestaurantByIdJson> = getRestaurant(params.rid);
	const restaurantJsonReady = await restaurantJson;

	return (
		<div className="relative w-full min-h-screen bg-black text-white">
			<div className="relative w-full h-64 mx-auto">
				<Image
					src="/img/gold-banner.png"
					alt="Sample Image"
					layout="fill"
					objectFit="cover"
					className=""
					priority
				/>
				<div className="absolute inset-0 flex items-end justify-start px-6 lg:px-16">
					<h1 className="text-white text-6xl sm:text-7xl font-eglen">
						{restaurantJsonReady.data.name}
					</h1>
				</div>
			</div>

			<div className="relative z-10 flex flex-col lg:flex-row lg:justify-between gap-12 px-6 lg:px-16 py-10">
				<div className="lg:w-2/3 space-y-8">
					<div>
						<Rating
							value={5}
							precision={0.5}
							readOnly
							size="small"
							className="w-full justify-start"
							sx={{ color: '#A17027' }}
						/>
						<div className="flex flex-wrap gap-2 mt-2">
							<span className="bg-white text-black rounded-full px-3 py-0.5 text-xs">
								{restaurantJsonReady.data.foodtype}
							</span>
						</div>
					</div>

					<p className="text-sm font-light">
						Welcome to Dongy Sushi – Where Luxury Meets Authenticity. Indulge in
						an elevated dining experience at Dongy Sushi, where every plate is a
						masterpiece, and every moment is unforgettable. Nestled in the heart
						of the city, Dongy Sushi offers a fine-dining ambiance that combines
						modern elegance with traditional Japanese artistry.
					</p>

					<div className="relative flex flex-row overflow-scroll rounded-lg gap-2">
						<Image
							src={restaurantJsonReady.data.picture}
							alt="Sushi Gallery"
							// objectFit="contain"
							// objectPosition="left"
							height={400}
							width={300}
						/>
						<Image
							src={restaurantJsonReady.data.picture}
							alt="Sushi Gallery"
							// objectFit="contain"
							// objectPosition="left"
							height={400}
							width={300}
						/>
						<Image
							src={restaurantJsonReady.data.picture}
							alt="Sushi Gallery"
							// objectFit="contain"
							// objectPosition="left"
							height={400}
							width={300}
						/>
						<Image
							src={restaurantJsonReady.data.picture}
							alt="Sushi Gallery"
							// objectFit="contain"
							// objectPosition="left"
							height={400}
							width={300}
						/>
					</div>
				</div>

				<div className="lg:w-1/4">
					<BookingPanel
						rid={restaurantJsonReady.data._id}
						restaurantName={restaurantJsonReady.data.name}
						token={session.user.token}
					/>
				</div>
			</div>
			<div className="bg-black text-white py-12 px-6 lg:px-16">
				<h2 className="text-3xl font-bold mb-8">Reviews</h2>
				<div className="space-y-8">
					{Array(5)
						.fill(0)
						.map((_, index) => (
							<div key={index} className="flex gap-4">
								<div className="flex-shrink-0">
									<Image
										src="/img/user-placeholder.png"
										alt="Reviewer"
										width={50}
										height={50}
										className="rounded-full"
									/>
								</div>
								<div>
									<h4 className="font-medium">John Smith</h4>
									<p className="text-sm text-gray-400">25, Nov 2025</p>
									<p className="mt-2">
										Good atmosphere. Good food quality. Worth all the dime
										spent. I'd say this is perfect for family time!!
									</p>
									<div className="flex items-center mt-2">
										<span className="text-yellow-400">★★★☆☆</span>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
