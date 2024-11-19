export default async function deleteBooking(id: string, token: string) {
	const response = await fetch(
		`https://seat-me-backend.vercel.app:443/api/v1/bookings/${id}`,
		{
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
	if (!response.ok) {
		throw new Error('Failed to fetch');
	}
	return await response.json();
}
