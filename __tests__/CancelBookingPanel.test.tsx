import CancelBookingPanel from '@/components/CancelBookingPanel';
import { render, screen, waitFor } from '@testing-library/react';

const mockData = {
	bid: '0',
	token: '0',
	restaurant: 'Test1',
	reserveDate: '2077-09-11',
	numOfGuests: 48234134,
};

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(),
}));

describe('CancelBookingPanel', () => {
	it('should have a correct restaurant name', async () => {
		const cancelBookingPanel = await CancelBookingPanel(mockData);
		render(cancelBookingPanel);
		await waitFor(() => {
			const restaurantName = screen.getByText('Test1');
			expect(restaurantName).toBeInTheDocument();
		});
	});
	it('should have a correct reservation date', async () => {
		const cancelBookingPanel = await CancelBookingPanel(mockData);
		render(cancelBookingPanel);
		await waitFor(() => {
			const reserveDate = screen.getByText('11 September 2077');
			expect(reserveDate).toBeInTheDocument();
		});
	});
	it('should have a correct number of guests', async () => {
		const cancelBookingPanel = await CancelBookingPanel(mockData);
		render(cancelBookingPanel);
		await waitFor(() => {
			const numGuest = screen.getByText('48234134');
			expect(numGuest).toBeInTheDocument();
		});
	});
});
