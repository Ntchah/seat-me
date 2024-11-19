export default async function deleteRestaurant(id: string, token: string) {
	const response = await fetch(
		`https://seat-me-backend.vercel.app:443/api/v1/restaurants/${id}`,
		{
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
	if (!response.ok) {
		console.log(response);
		throw new Error('Failed to fetch');
	}
	return await response.json();
}
