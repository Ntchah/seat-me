import BookingCard from '@/components/BookingCard';
import { render, screen, waitFor } from '@testing-library/react';

const mockData = {
	index: 1,
	id: '0',
	name: 'Test0',
	imgSrc: '/img/test0.png',
	reserveDate: '2024-12-18',
};

describe('MyBookingCard', () => {
	it('should have a correct restaurant name', async () => {
		const myBookingCard = await BookingCard(mockData);
		render(myBookingCard);
		await waitFor(() => {
			const restaurantName = screen.getByText('Test0');
			expect(restaurantName).toBeInTheDocument();
		});
	});
	it('should have a correct reservation date', async () => {
		const myBookingCard = await BookingCard(mockData);
		render(myBookingCard);
		await waitFor(() => {
			const reserveDate = screen.getByText('18 December 2024');
			expect(reserveDate).toBeInTheDocument();
		});
	});
	it('should have a restaurant image', async () => {
		const myBookingCard = await BookingCard(mockData);
		render(myBookingCard);
		await waitFor(() => {
			const imageCount = screen.queryAllByRole('img');
			expect(imageCount.length).toBe(1);
		});
	});
});
