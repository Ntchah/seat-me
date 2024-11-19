'use client';
import Link from 'next/link';

export default function BookingTableRow({
	userName,
	restaurantName,
	bookingDate,
	bid,
}: {
	userName: string;
	restaurantName: string;
	bookingDate: string;
	bid: string;
}) {
	return (
		<tr className="border-b border-gray-700 hover:bg-gray-900 text-sm font-light">
			<td className="px-4 py-2">{userName}</td>
			<td className="px-4 py-2">{restaurantName}</td>
			<td className="px-4 py-2">{bookingDate}</td>
			<td className="px-4 py-2 flex space-x-2">
				<Link
					href={`/manage/booking/detail/${bid}`}
					className="border-[1px] rounded-full border-white text-white text-sm  px-3 py-1 flex items-center justify-center"
				>
					View
				</Link>
				<Link
					href={`/manage/booking/edit/${bid}`}
					className="border-[1px] rounded-full border-gray-500 bg-gray-500 text-white text-sm  px-3 py-1 flex items-center justify-center"
				>
					Edit
				</Link>
				<Link
					href={`/manage/booking/delete/${bid}`}
					className="border-[1px] rounded-full border-red-600 bg-red-600 text-white text-sm  px-3 py-1 flex items-center justify-center"
				>
					Delete
				</Link>
			</td>
		</tr>
	);
}
