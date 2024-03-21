<script lang="ts">
	import type { JobType } from '$lib/types';
	export let job: JobType;
</script>

<div class="job">
	<div class="job-timeline">
		<img src={job.companyLogo} alt={job.companyName} />
		<p>{job.jobPeriod}</p>
	</div>
	<div class="job-description">
		<h1>{job.companyName}</h1>
		<p class="tech-list">{job.techList}</p>
		{#each job.jobDescription as description}
			<li>{@html description}</li>
		{/each}
	</div>
</div>

<style>
	img {
		max-width: 60px;
		max-height: 60px;
		border: 0.5rem solid var(--background-color);
	}

	li {
		color: var(--secondary-color);
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

	.job-description {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 1rem;
		border: 4px solid var(--primary-color);
	}
</style>
