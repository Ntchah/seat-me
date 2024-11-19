import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import NavBar from '@/components/NavBar';
import getRestaurant from '@/libs/getRestaurant';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { RestaurantByIdJson } from '../../../../../../interface';

export default async function page({
	params,
}: {
	params: {
		rid: string;
	};
}) {
	const session = await getServerSession(authOptions);
	if (!session) return null;
	const restaurantJson: Promise<RestaurantByIdJson> = getRestaurant(params.rid);
	const restaurantJsonReady = await restaurantJson;

	return (
		<div className="flex flex-row">
			<NavBar />
			<main className="flex flex-col items-start px-24 py-32 bg-black w-full min-h-screen text-white">
				<p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
					Restaurant Detail
				</p>
				<div className="relative z-20 flex flex-row justify-center w-3/4 items-top justify-items-center gap-8 pt-12">
					<div className="relative z-20 flex flex-col justify-start self-center items-start w-full">
						<div className="relative z-20 flex flex-col max-w-lg space-y-2 p-8 w-full bg-transparent border border-white rounded-lg">
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">
									Restaurant name
								</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.name}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">Address</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.address}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">Food Type</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.foodtype}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">Province</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.province}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">
									Postal Code
								</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.postalcode}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">Tel</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.tel}
								</p>
							</div>
						</div>
						<div className="py-6 space-x-2 flex justify-start items-start justify-items-start gap-4">
							<Link
								href={`/manage/restaurant/edit/${params.rid}`}
								className="w-36 h-10 z-10 border-[1px] rounded-full border-gray-500 bg-gray-500 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
							>
								Edit Restaurant
							</Link>
							<Link
								href={`/manage/restaurant/delete/${params.rid}`}
								className="w-40 h-10 z-10 border-[1px] rounded-full border-red-600 bg-red-600 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
							>
								Delete Restaurant
							</Link>
						</div>
					</div>
					<div>
						<Image
							src={restaurantJsonReady.data.picture}
							alt="Restaurant Image"
							width={300}
							height={600}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
