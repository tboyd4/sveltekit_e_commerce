<script lang="ts">
	import { getAllProducts } from '../services/products.service';
	import { onMount } from 'svelte';
	import { productStore } from '../stores/productStore';

	onMount(async () => {
		let grabbedProducts = await getAllProducts();
		productStore.setProducts(grabbedProducts.reverse());
	});
</script>

<slot />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
