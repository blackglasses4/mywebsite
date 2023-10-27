<script>
	import '$lib/styles/main.css';
	import '$lib/styles/aboutme.css';
	import '$lib/styles/portfolio.css';
	import { page } from '$app/stores';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';
</script>

<header id="header">
	<a class="logo" href="/">adrianna <span>pawłowska</span></a>
		<ThemeSwitch />
		<!-- <LanguageSwitch /> -->

		<input class="side-menu" type="checkbox" id="side-menu"/>
		<label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
		
		<nav class="nav">
			<ul class="menu">
				<li><a href="/about" id="about" class:active={$page.url.pathname == '/about/'}>O mnie</a></li>
				<li><a href="/portfolio" id="portfolio" class:active={$page.url.pathname == '/portfolio/'}>Portfolio</a></li>
			</ul>
		</nav>
</header>

<main>
	<slot />
</main>

<div id="section-contact">
	<div class="contact-local">
        <h2>Based in Poland</h2>
		<footer>&copy; 2023 by Adrianna. All rights reserved.</footer>
    </div>
    <div class="contact-links">
        <h2>Social</h2>
        <p><a id="profile-links" target="_blank" href="https://www.instagram.com/3d.greengirl/">Instagram<i class='bx bx-right-arrow-alt'></i></a></p>
        <p><a id="profile-links" target="_blank" href="https://www.facebook.com/profile.php?id=100013368822697">Facebook<i class='bx bx-right-arrow-alt'></i></a></p>
        <p><a id="profile-links" target="_blank" href="https://github.com/blackglasses4">Github<i class='bx bx-right-arrow-alt'></i></a></p>
        <p><a id="profile-links" target="_blank" href="https://www.linkedin.com/in/adrianna-paw%C5%82owska-a24850215/">Linkedln<i class='bx bx-right-arrow-alt'></i></a></p>
        <p><a id="profile-links" target="_blank" href="mailto:adriannapx@gmail.com">Send a email<i class='bx bx-right-arrow-alt'></i></a></p>
    </div>
	
</div>

