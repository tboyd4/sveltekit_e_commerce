<script lang='ts'>
	import { getAllProducts } from '../services/products.service';
	import { onMount } from 'svelte';
	import { debug } from 'debug';

	const log = debug('app:Layout--LAYOUT');

	onMount(() => {
		log('about to get all products');
		getAllProducts();
	})
</script>

<slot />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
