export { default } from 'next-auth/middleware';

export const config = {
	matcher: ['/restaurant', '/manage', '/mybooking'],
};
