<script type="ts">
	import { page } from '$app/stores';
	$: slug = $page.params.slug;
</script>

<h1>Blog Post: {slug}</h1>
