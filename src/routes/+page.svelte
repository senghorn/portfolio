<script>
	import Navbar from '../components/Navbar.svelte';

	import Icon from '@iconify/svelte';

	let greeting = 'Sur Sdey';

	function showTranslation() {
		greeting = 'Hello (in Khmer)';
	}
	function hideTranslation() {
		greeting = 'Sur Sdey';
	}
</script>

<Navbar />

<div class="main">
	<h1>
		🙏 <span
			tabindex="0"
			role="button"
			on:mouseenter={showTranslation}
			on:mouseleave={hideTranslation}
			on:focus={showTranslation}
			on:blur={hideTranslation}>{greeting}</span
		>
		! I'm <span class="name">Seng Rith</span>.
	</h1>
	<div class="body">
		<div class="container">
			<p>
				I am a Master's student at the <span class="highlight">University of Utah</span>. I am
				studying <span class="brighten">Computer Science</span> with focus on
				<span class="brighten">AI/ML(NLP, Deep Learning)</span>
				and <span class="brighten">Cybersecurity</span>. I'm graduating in
				<span class="highlight">May 2025</span>.
			</p>

			<p>
				My passion extends into culinary exploration, reveling in both crafting and enjoying new
				dishes. From the zest of Birria Tacos and the freshness of Papaya Salad to the warmth of
				Vietnamese Pho, I've explored diverse flavors. Continuously, I seek to master and embrace
				the art of global culinary traditions.
			</p>

			<p>
				Let's connect and share our stories. I'm always open to new experiences and opportunities.
			</p>
		</div>
		<div class="container">
			<img src="portrait.jpg" alt="Your Name" />
		</div>
	</div>
	<div class="grid-contact-container">
		<div class="grid-item">
			<Icon icon="mdi:github" style="font-size: 28px;" />
			<a href="https://github.com/senghorn" target="_blank"> senghorn </a>
		</div>
		<div class="grid-item">
			<Icon icon="mdi:email" style="font-size: 28px; color: #00D1FF" />
			<a href="mailto:sun_rsh@outlook.com" target="_blank"> sun_rsh </a>
		</div>

		<div class="grid-item">
			<Icon icon="mdi:linkedin" style="font-size: 28px; color: #3D6CB9" />
			<a href="https://www.linkedin.com/in/seng-horn-rith-550991187/" target="_blank">
				Seng Horn
			</a>
		</div>
	</div>
</div>

<style>
	div {
		text-align: center;
		max-width: 800px;
		margin: auto;
	}
	img {
		max-width: 350px;
		max-height: 550px;
		border-radius: 2%;
		margin: auto;
	}
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.name {
		color: var(--accent-color);
		text-decoration: underline;
	}

	.highlight {
		color: var(--primary-color);
		font: bold;
	}

	.brighten {
		color: var(--font-color);
	}

	p {
		font-size: 20px;
		color: var(--secondary-color);
	}

	.main {
		margin-bottom: 8rem;
	}

	.body {
		display: flex;
		flex-direction: row;
		place-items: center;
		padding: 2rem;
	}
	.grid-contact-container {
		display: grid;
		grid-template-columns: auto auto auto;
		border: 4px solid var(--accent-color);
		padding: 1rem;
		margin-top: 1rem;
	}
	.grid-item {
		display: flex;
		justify-content: center;
		margin-right: 1rem;
	}

	/* Style for anchoring tags in contact-list */
	.grid-item a {
		color: var(--font-color);
		font-size: 20px;
	}

	@media (max-width: 800px) {
		.body {
			flex-direction: column;
		}
		img {
			max-width: 300px;
			max-height: 400px;
			border-radius: 2%;
			margin: auto;
		}
	}
</style>
