<script>
	import { base } from '$app/paths';
	export let cardImageUrl = 'https://source.unsplash.com/600x400/?computer';
	export let altText = 'card image';
	export let tagColor = 'blue';
	export let tagName = 'Technology';
	export let title = "What's new in 2022 Tech";
	export let description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
	export let userImageUrl = 'seng.jpg';
	export let userName = 'Jane Doe';
	export let timeAgo = '2h ago';
	export let slug = "";
</script>


<div class="card">
	<div class="card__header">
		<img src={cardImageUrl} alt={altText} class="card__image" width="600" height="200"/>
	</div>
	<div class="card__body">
		<span class={`tag tag-${tagColor}`}>{tagName}</span>
		<h3><a href="{base}/blog/{slug}">{title}</a></h3>
		<p class="text-sm text-slate-400">{description}</p>
	</div>
	<div class="card__footer">
		<div class="user">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img alt="user image" class="user__image" src={userImageUrl} width="40" height="40"/>
			<div class="user__info">
				<h5>{userName}</h5>
				<small>{timeAgo}</small>
			</div>
		</div>
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

	img {
		max-width: 100%;
		display: block;
		object-fit: cover;
	}

	.card {
		display: flex;
		flex-direction: column;
		width: clamp(20rem, calc(20rem + 2vw), 22rem);
		overflow: hidden;
		box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
		border-radius: 1em;
		background-color: var(--light-black-color);
	}

	.card__body {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.card__body h3 > a {
		text-decoration: none;
		font-size: inherit;
		color: inherit;
	}

	.card__body h3 > a:hover {
		text-decoration: underline;
	}

	.tag {
		align-self: flex-start;
		padding: 0.25em 0.75em;
		border-radius: 1em;
		font-size: 0.75rem;
	}

	.tag + .tag {
		margin-left: 0.5em;
	}

	.tag-blue {
		background: #56ccf2;
		background: linear-gradient(to bottom, #2f80ed, #56ccf2);
		color: #fafafa;
	}

	.tag-brown {
		background: #d1913c;
		background: linear-gradient(to bottom, #ffd194, #d1913c);
		color: #fafafa;
	}

	.tag-red {
		background: #cb2d3e;
		background: linear-gradient(to bottom, #ef473a, #cb2d3e);
		color: #fafafa;
	}

	.card__body h3 {
		text-transform: capitalize;
	}

	.card__footer {
		display: flex;
		padding: 1rem;
		margin-top: auto;
	}

	.user {
		display: flex;
		gap: 0.5rem;
	}

	.user__image {
		border-radius: 50%;
	}

	.user__info > small {
		color: #666;
	}
</style>
