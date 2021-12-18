import { writable } from 'svelte/store';

function createProductStore() {
	const { subscribe, set } = writable([]);

	return {
		subscribe,
		setProducts: (incomingProducts) => set(incomingProducts)
	};
}

export const productStore = createProductStore();
