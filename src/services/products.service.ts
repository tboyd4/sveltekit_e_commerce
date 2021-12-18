import WooCommerceAPI from 'woocommerce-api';
import { variables } from '../tools/variables';
import { debug } from 'debug';

const log = debug('app:Products--SERVICE');

const WooCommerce = new WooCommerceAPI({
	url: `${variables.wpBaseUrl}`,
	consumerKey: variables.consumerKey,
	consumerSecret: variables.consumerSecret,
	wpAPI: true,
	version: 'wc/v1'
});

export const getAllProducts = (): unknown => {
	const allProducts = WooCommerce.getAsync('products').then((result) => {
		log('allProducts Response:', result);

		return JSON.parse(result.toJSON().body);
	});

	return allProducts;
};
