<script lang="ts">
	import type { JobType } from '$lib/types';
	import Job from '../../components/Job.svelte';

	const jobs: JobType[] = [
		{
			companyName: 'Qnergy Inc.',
			companyLogo: 'qnergy-logo.png',
			jobPeriod: 'June 2023-Feb 2024',
			techList: 'React.js, Node.js, Express.js, MongoDB, Linux',
			jobDescription: [
				'Built email notification feature to alert user about their subscription',
				'Developed test automation project using Playwright framework',
				'Implemented <span class="highlight">security CAPTCHA</span> and <span class="highlight">device cookies</span>, which detected hundreds of bot-like login attempts using Google\'s reCaptcha V3 API'
			]
		},
		{
			companyName: 'University of Utah',
			companyLogo: 'u-logo.jpg',
			jobPeriod: 'May 2022-Aug 2023',
			techList: 'Java, Selenium, MySQL, HTML, CSS, JavaScript, Git, Docker, Linux, Windows',
			jobDescription: [
				'Created, maintained, and updated existing Java Selenium Test applications',
				'Refined Web Application for test result tracker which improved data storage and retrieval using MySQL',
			]
		}
	];

	const projects: JobType[] = [
		{
			companyName: 'CareCoord',
			companyLogo: 'carecoord.png',
			jobPeriod: 'August 2022-May 2023',
			techList: 'ReactNative, Node.js, Express.js, MySQL, Docker',
			jobDescription: [
				'Built real-time group messaging feature',
				'Implemented user authentication flow in both frontend and backend',
				'Coordinate with team to put together full-stack mobile application'
			]
		}
	];
</script>

<svelte:head>
	<title>Work</title>
	<meta name="description" content="Showcasing my coding works both professional and academic." />
</svelte:head>

<div class="main">
	<h1>🧑🏻‍💻 Professional</h1>
	<div class="job-list">
		{#each jobs as job}
			<Job job={job}/>
		{/each}
	</div>
	<h1>👷🏻‍♂️ Project</h1>
	<div class="job-list">
		{#each projects as proj}
			<Job job={proj}/>
		{/each}
	</div>
</div>

<style>
	div {
		max-width: 800px;
		margin: 0 auto;
	}
	.main {
		margin-bottom: 8rem;
	}
	.job-list {
		display: flex;
		flex-direction: column;
	}

</style>
