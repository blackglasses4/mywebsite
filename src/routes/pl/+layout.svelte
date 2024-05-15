<script>
	import '$lib/styles/css/main.css';
	// import '$lib/styles/css/about.css';
	// import '$lib/styles/ofert.css';
	// import '$lib/styles/contact.css';
	import { page } from '$app/stores';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { afterNavigate } from '$app/navigation';
	import LangSwitch from '$lib/components/LangSwitch.svelte';

	let showMenu = false;

	afterNavigate(navigation => {
		showMenu = false;
	});

	function afterNavigation() {
		showMenu = false;
	};

	let lang = 'pl';
</script>

<header class="header" id="header">
		<a class="header__logo" rel="internal" href="/{lang}/">Adrianna Pawłowska</a>
		
		<div class="header__theme">
			<ThemeSwitch />
			<LangSwitch languageCode={lang}/>
		</div>

		<input class="side-menu" type="checkbox" id="side-menu" bind:checked={showMenu} />
		<label class="hamb" for="side-menu"><span class="hamb__line"></span></label>
		
		<nav class="nav">
			<ul class="nav__menu">
				<li><a class="footer-a about" href="/{lang}/#aboutme" on:click={afterNavigation} rel="internal" class:active={$page.url.pathname == '/'+lang+'/about'}>Krótko o mnie</a></li>
				<li><a class="footer-a skill" href="/{lang}/#skill" on:click={afterNavigation} rel="internal" class:active={$page.url.pathname == '/'+lang+'/skill'}>Umiejętności</a></li>
				<li><a class="footer-a project" href="/{lang}/#project" on:click={afterNavigation} rel="internal" class:active={$page.url.pathname == '/'+lang+'/project'}>Projekty</a></li>
				<li><a class="footer-a contact" href="/{lang}/#contact" on:click={afterNavigation} rel="internal" class:active={$page.url.pathname == '/'+lang+'/contact/'}>Kontakt</a></li>
			</ul>
			<div class="nav__icon">
				<p><a target="_blank" aria-label="Anchor to transfer to the company Facebook page" href="https://www.facebook.com/profile.php?id=100013368822697" rel="noopener noreferrer"><i class='bx bxl-facebook-square' ></i></a></p>
				<p><a target="_blank" aria-label="Anchor to transfer to the company Linkedln page" href="https://www.linkedin.com/in/adrianna-paw%C5%82owska-a24850215/"><i class='bx bxl-linkedin-square' ></i></a></p>
				<p><a target="_blank" aria-label="Anchor to transfer to the company Instagram page" href="https://www.instagram.com/zielona_laska/" rel="noopener noreferrer"><i class='bx bxl-instagram-alt'></i></a></p>
				<p><a target="_blank" aria-label="Anchor to transfer to the company Github page" href="https://github.com/blackglasses4/mywebsite" rel="noopener noreferrer"><i class='bx bxl-github' ></i></a></p>
			</div>
		</nav>
</header>

<main>
	<slot />
</main>

<footer id="contact">
	<h1>Chcesz rozpocząć wspólny projekt?</h1><hr>
	<div class="footer__content">
		<div class="footer__content-call">
			<h2>Napisz do mnie!</h2>
			<div class="footer-contact">
				<p><a href="mailto:adriannapx@gmail.com">adriannapx@gmail.com</a></p>
				<p>+48 730 464 132</p>
			</div>
		</div>
		<div class="footer__content-nav">
			<h2>Navigacja</h2>
			<p><a class="footer-a" href="/{lang}/#aboutme" rel="internal" class:active={$page.url.pathname == '/'+lang+'/about'}>Krótko o mnie</a></p>
			<p><a class="footer-a" href="/{lang}/#skill" rel="internal" class:active={$page.url.pathname == '/'+lang+'/skill'}>Umiejętności</a></p>
			<p><a class="footer-a" href="/{lang}/#project" rel="internal" class:active={$page.url.pathname == '/'+lang+'/project'}>Projekty</a></p>
		</div>
	</div>
	<div class="footer__copysocial">
			<p>&copy; 2024 by Adrianna Pawłowska </p>
			<p>Strona zaprojektowana i zakodowana z &#x2764;&#xFE0F;&#x200D;&#x1F525;</p>
		<div class="footer-social">
			<p><a target="_blank" aria-label="Anchor to transfer to the company Facebook page" href="https://www.facebook.com/profile.php?id=100013368822697" rel="noopener noreferrer"><i class='bx bxl-facebook-square' ></i></a></p>
			<p><a target="_blank" aria-label="Anchor to transfer to the company Linkedln page" href="https://www.linkedin.com/in/adrianna-paw%C5%82owska-a24850215/"><i class='bx bxl-linkedin-square' ></i></a></p>
			<p><a target="_blank" aria-label="Anchor to transfer to the company Instagram page" href="https://www.instagram.com/zielona_laska/" rel="noopener noreferrer"><i class='bx bxl-instagram-alt'></i></a></p>
			<p><a target="_blank" aria-label="Anchor to transfer to the company Github page" href="https://github.com/blackglasses4/mywebsite" rel="noopener noreferrer"><i class='bx bxl-github' ></i></a></p>
		</div>
	</div>
</footer>