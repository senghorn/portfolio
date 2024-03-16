<script>
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />

<div>
	<h1>🙏 Sour Sdey! I am <span class="name">Seng Rith</span>.</h1>
	<img src="portrait.jpg" alt="Your Name" />
	<p>
		Sour Sdey - Hello in Khmer. I am a Master's student at the University of Utah. I am
		studying Computer Science with a focus on NLP and Cybersecurity.
	</p>
</div>

<style>
	div {
		text-align: center;
        max-width: 800px;
        margin: 0 auto;
	}
	img {
		max-width: 350px;
		max-height: 450px;
		border-radius: 5%;
        margin: 1rem;
	}
    .name {
        color: #FFD700;
        text-decoration: underline;
    }
</style>
