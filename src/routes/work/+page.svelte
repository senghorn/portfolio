<script>
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />

<div class="main">
	<h1>
		🧑🏻‍💻 Professional
	</h1>
	<div class="job-list">
		<div class="job">
			<div class="job-timeline">
				<h3>Jun 2023 - Feb 2024</h3>
				<img src="qnergy-logo.png" alt="Qnergy" />
			</div>
		</div>
	</div>
</div>

<style>
	div {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2rem;
	}

	h3 {
		margin: 0;
		color: var(--secondary-color);
	}

	img {
		max-width: 140px;
		max-height: 140px;
		border-radius: 2%;
	}

	.main {
		margin-bottom: 8rem;
	}

	.job-list {
		display: flex;
		flex-direction: column;
		place-items: center;
	}

	.body > *:first-child {
		margin-right: 1rem;
	}

	.body > *:last-child {
		margin-left: 1rem;
		
	}
</style>
