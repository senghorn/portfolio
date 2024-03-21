<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
	import type { JobType } from '$lib/types';
	import Job from '../../components/Job.svelte';

	const jobs: JobType[] = [
		{
			companyName: 'Qnergy Inc.',
			companyLogo: 'qnergy-logo.png',
			jobPeriod: 'June 2023- Feb 2024',
			techList: 'React.js, Node.js, Express.js, MongoDB, Linux',
			jobDescription: [
				'Built email notification feature to alert user about their subscription',
				'Developed test automation project using Playwright framework',
				'Implemented <span class="highlight">security CAPTCHA</span> and <span class="highlight">device cookies</span>, which detected hundreds of bot-like login attempts using Google\'s reCaptcha V3 API'
			]
		}
	];
</script>

<svelte:head>
	<title>Work</title>
	<meta name="description" content="Showcasing my coding works both professional and academic." />
</svelte:head>

<Navbar />

<div class="main">
	<h1>🧑🏻‍💻 Professional</h1>
	<div class="job-list">
		{#each jobs as job}
			<Job job={job}/>
		{/each}
	</div>
</div>

<style>
	div {
		max-width: 800px;
		margin: 0 auto;
	}

	img {
		max-width: 60px;
		max-height: 60px;
		border: 0.5rem solid var(--background-color);
	}
	li {
		color: var(--secondary-color);
	}
	.main {
		margin-bottom: 8rem;
	}
	.job-list {
		display: flex;
		flex-direction: column;
	}

	.job-list h1 {
		margin: 0;
	}

	.job {
		display: flex;
		flex-direction: column;
	}
	.tech-list {
		background-color: var(--primary-color);
		border-radius: 1rem;
		padding: 0 8px;
		margin: 0 0 1rem 0;
		width: fit-content;
	}
	.job-timeline {
		display: flex;
		width: 100%;
		flex-direction: row;
		gap: 0.5rem;
		align-items: center;
		justify-content: flex-start;
		position: relative;
		top: 20px;
		left: 10px;
	}

	.job-timeline p {
		margin: 0;
		font-style: italic;
	}
</style>
