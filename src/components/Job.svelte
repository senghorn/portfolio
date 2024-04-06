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
		<h3>{job.companyName}</h3>
		<div class="p-1">
			{#each job.techList as tech}
				<span
					class="inline-flex items-center m-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xs text-gray-600"
				>
					<span class="ml-1"> {tech} </span>
				</span>
			{/each}
		</div>
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
		border: 1px solid var(--accent-color);
		border-radius: 1rem;
	}
</style>
