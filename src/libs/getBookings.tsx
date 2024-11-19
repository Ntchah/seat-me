export default async function getBookings(token: string) {
	const response = await fetch(
		'https://seat-me-backend.vercel.app:443/api/v1/bookings',
		{
			method: 'GET',
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);

	if (!response.ok) throw new Error('failed to fetch');
	return await response.json();
}
