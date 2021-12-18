<script>
	import ProductCard from '../components/ProductCard.svelte';
	import { productStore } from '../stores/productStore';
</script>

<div>
	<br />
	{#if $productStore}
		{#each $productStore as product}
			<ProductCard {product} />
		{/each}
	{:else}
		<p>...loading</p>
	{/if}
</div>
