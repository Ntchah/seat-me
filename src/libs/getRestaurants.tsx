export default async function getRestaurants() {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const response = await fetch(
		'https://seat-me-backend.vercel.app:443/api/v1/restaurants',
	);
	if (!response.ok) throw new Error('Failed to fetch');
	return await response.json();
}
