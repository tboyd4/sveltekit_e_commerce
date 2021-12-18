<script lang="ts">
	export let product;
</script>

<div
	class="mx-auto my-10 p-8 w-96 h-max border-blue-300 border-2 rounded items-center transition-all hover:bg-blue-300 hover:text-white hover:border-white hover:scale-105 cursor-pointer"
>
	<p>{product.name}</p>
	<br />
	<p>{@html product.description}</p>
	<br />
	<p>{`$${product.price}`}</p>
</div>
