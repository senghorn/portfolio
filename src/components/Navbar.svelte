<script>
	import { base } from '$app/paths';
</script>

<div class="mx-auto w-full max-w-screen-lg sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
	<nav>
		<ul>
			<li><a href="{base}/">About</a></li>
			<li><a href="{base}/work">Work</a></li>
			<li><a href="{base}/blog">Blog</a></li>
		</ul>
	</nav>
</div>

<style>
	nav {
		padding: 1rem;
		border-bottom: 1px solid white;
	}
	nav ul {
		list-style: none;
		padding: 0;
	}
	nav li {
		display: inline;
		margin-right: 1rem;
	}

	nav li::after {
		content: '|';
		margin-left: 1rem;
	}

	a {
		color: white;
		text-decoration: none;
		font-size: 24px;
	}
</style>
