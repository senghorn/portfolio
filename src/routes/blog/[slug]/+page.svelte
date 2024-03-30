<script type="ts">
	import { page } from '$app/stores';
	$: slug = $page.params.slug;
	export let data;
</script>

<h1>Blog Post: {slug}</h1>
<article>
	{@html data.blog}
</article>
