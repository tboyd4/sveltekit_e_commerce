import debug from 'debug';

const log = debug('app:Products--SERVICE');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAllProducts = () => {
	return fetch('http://localhost:5000/products').then((response) => {
		log('allProducts Response', response.body);
		return response;
	});
};
