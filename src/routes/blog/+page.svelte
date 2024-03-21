<script>
	import Card from '../../components/Blog/Card.svelte';
</script>

<svelte:head>
	<title>Blog - Seng Rith</title>
	<meta
		name="description"
		content="Welcome to my blog! Here you will find a collection of my thoughts, ideas, and experiences. I hope you enjoy reading them as much as I enjoyed writing them."
	/>
	<meta property="og:title" content="Blog - Seng Rith" />
	<meta property="og:description" content="Welcome to my blog! Here you will find a collection of my thoughts, ideas, and experiences. I hope you enjoy reading them as much as I enjoyed writing them." />
	<meta property="og:image" content="" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="main">
	<h1>📝 Blog</h1>
	<br>
	<div>
		<p>
			Welcome to my blog! Here you will find a collection of my thoughts, ideas, and experiences. I hope you enjoy reading them as much as I enjoyed writing them.
		</p>
	</div>

	<div class="container">
		<Card
			cardImageUrl="https://source.unsplash.com/600x400/?nature"
			altText="Nature image"
			tagColor="blue"
			tagName="Technology"
			title="Exploring Nature With Technology"
			description="Discover the beauty and serenity of nature through deep learning."
			userImageUrl="https://i.pravatar.cc/40?img=2"
			userName="John Doe"
			timeAgo="3h ago"
		/>
		<Card
			cardImageUrl="https://source.unsplash.com/600x400/?food"
			altText="Food image"
			tagColor="brown"
			tagName="Food"
			title="Delicious Food"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!"
			userImageUrl="https://i.pravatar.cc/40?img=2"
			userName="Jony Doe"
			timeAgo="Yesterday"
		/>
		<Card
			cardImageUrl="https://source.unsplash.com/600x400/?car,automobile"
			altText="Car image"
			tagColor="red"
			tagName="Automobile"
			title="Race to your heart content"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!"
			userImageUrl="https://i.pravatar.cc/40?img=3"
			userName="John Doe"
			timeAgo="2d ago"
		/>
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
