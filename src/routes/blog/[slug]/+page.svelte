<script type="ts">
	import { page } from '$app/stores';
	$: slug = $page.params.slug;
	export let data;
</script>

<div class="p-8 mx-auto w-full max-w-screen-lg sm:max-w-xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
	<h1>Blog Post: {slug}</h1>
	<article>
		{@html data.blog}
	</article>
</div> 

<style>
	h1 {
		font-weight: 700;
		margin-bottom: 1rem;
	}
</style>
