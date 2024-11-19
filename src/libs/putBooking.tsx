export default async function putBooking(
	id: string,
	token: string,
	bookingDate: string,
	numOfGuests: number,
	bookingCreatedAt: string,
) {
	const response = await fetch(
		`https://seat-me-backend.vercel.app:443/api/v1/bookings/${id}`,
		{
			method: 'PUT',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				bookingDate: bookingDate,
				numOfGuests: numOfGuests,
				createdAt: bookingCreatedAt,
			}),
		},
	);
	if (!response.ok) {
		throw new Error('Failed to fetch');
	}
	return await response.json();
}
