<script>
	import Navbar from '$lib/Navbar.svelte';

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
		<div>
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

			<div class="contact-list">
				<div class="contact-row">
					<div class="contact-item">
						<Icon icon="mdi:github"  style="font-size: 28px;" />
						<a href="https://github.com/senghorn" target="_blank"> senghorn </a>
					</div>
					<div class="contact-item">
						<Icon icon="mdi:email"  style="font-size: 28px; color: #00D1FF" />
						<a href="mailto:sun_rsh@outlook.com" target="_blank"> sun_rsh </a>
					</div>
				</div>
				<div class="contact-row">
					<div class="contact-item">
						<Icon icon="mdi:linkedin"  style="font-size: 28px; color: #3D6CB9" />
						<a href="https://www.linkedin.com/in/seng-horn-rith-550991187/" target="_blank"> Seng Horn </a>
					</div>
				</div>
			</div>
		</div>
		<div>
			<img src="portrait.jpg" alt="Your Name" />
		</div>
	</div>
</div>

<style>
	div {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}
	img {
		max-width: 350px;
		max-height: 550px;
		border-radius: 2%;
		margin: 1rem;
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

	.contact-list {
		display: flex;
		flex-direction: row;
		padding: 1rem;
		border-radius: 10px;
		border: 4px solid var(--accent-color);
	}

	.contact-row {
		display: flex;
		flex-direction: column;
	}

	/* Style for anchoring tags in contact-list */
	.contact-list a {
		color: var(--font-color);
		font-size: 20px;
	}

	.contact-item {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.main {
		margin-bottom: 8rem;
	}

	.body {
		display: flex;
		flex-direction: row;
		place-items: center;
	}

	.body > *:first-child {
		margin-right: 1rem;
	}

	.body > *:last-child {
		margin-left: 1rem;
	}
</style>
