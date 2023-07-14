<script>
	import '$lib/styles/style.css';
	import { page } from '$app/stores';
</script>
<div class="container">
	<header>
		<a id="left-header" href="/">adrianna pawłowska</a>
		<ul class="right-header">
			<li><a href="/about" class:active={$page.url.pathname == '/about/'}>o mnie</a></li>
			<li><a href="/portfolio" class:active={$page.url.pathname == '/portfolio/'}>portfolio</a></li>
			<li><a href="/contact" class:active={$page.url.pathname == '/contact/'}>kontakt</a></li>
		</ul>
	</header>
	
	<main>
		<slot />
	</main>

	<footer>&copy; 2023 by Adrianna. All rights reversed.</footer>
</div>
