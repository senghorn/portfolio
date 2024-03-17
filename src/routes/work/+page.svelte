<script>
	import Navbar from '$lib/Navbar.svelte';
</script>


<svelte:head>
  <title>Work</title>
  <meta name="description" content="Showcasing my coding works both professional and academic." />
</svelte:head>

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
			<div class="job-description">
				<h1>Qnergy Inc.</h1>
				<p class="tech-list">React.js, Node.js, Express.js, MongoDB, Linux</p>
				<li>
					Built email notification feature to alert user about their subscription
				</li>
				<li>
					Developed test automation project using Playwright framework
				</li>
				<li>
					Implemented security CAPTCHA and device cookies, which detected hundreds of
					bot-like login attempts using Google’s reCaptcha V3 API
				</li>
			</div>
		</div>
	</div>
</div>

<style>
	div {
		max-width: 800px;
		margin: 0 auto;
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

	.job-list h1 {
		margin:0;
	}

	.job {
		display: flex;
		flex-direction: row;
	}
	.tech-list {
		display: inline-block;
		background-color: var(--primary-color);
		border-radius: 1rem;
		padding: 0 8px;
		margin: 0 0 1rem 0;
	}
</style>
