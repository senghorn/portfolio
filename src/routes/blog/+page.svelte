<script lang="ts">
	import Card from '../../components/Blog/Card.svelte';
	export let data;
</script>

<svelte:head>
	<title>Blog - Seng Rith</title>
	<meta
		name="description"
		content="Welcome to my blog! Here you will find a collection of my thoughts, ideas, and experiences. I hope you enjoy reading them as much as I enjoyed writing them."
	/>
	<meta property="og:title" content="Blog - Seng Rith" />
	<meta
		property="og:description"
		content="Welcome to my blog! Here you will find a collection of my thoughts, ideas, and experiences. I hope you enjoy reading them as much as I enjoyed writing them."
	/>
	<meta property="og:image" content="" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="main">
	<h1>📝 Blog</h1>
	<br />
	<div>
		<p>
			Welcome to my blog! Here you will find a collection of my thoughts, ideas, and experiences. I
			hope you enjoy reading them as much as I enjoyed writing them.
		</p>
	</div>
	<div class="container">
		{#each data.blogs as blog}
			<Card
				cardImageUrl={blog.imageUrl}
				altText="Nature image"
				tagColor={blog.tagColor}
				tagName={blog.tag}
				title={blog.title}
				description={blog.description}
				userImageUrl="seng.jpg"
				userName={blog.author}
				timeAgo={blog.timeAgo}
				slug={blog.slug}
			/>
		{/each}
	</div>
</div>

<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 1200px;
		margin-block: 2rem;
		gap: 2rem;
	}

	div {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
