<script>
	import '$lib/styles/main.css';
	import '$lib/styles/aboutme.css';
	// import '$lib/styles/portfolio.css';
	import '$lib/styles/contact.css';
	import { page } from '$app/stores';
</script>
<nav class="navbar">
	<a class="logo" href="/">adrianna <span>pawłowska</span></a>
	<div class="nav-links">
		<ul>
			<li><a href="/about" class:active={$page.url.pathname == '/about/'}>o mnie</a></li>
			<li><a href="/portfolio" class:active={$page.url.pathname == '/portfolio/'}>portfolio</a></li>
			<li><a href="/contact" class:active={$page.url.pathname == '/contact/'}>kontakt</a></li>
			<li class="header_line"></li>
			<!-- <button class="header_sun"><i class='bx bxs-sun'></i></button> -->
		</ul>
	</div>
	<a id="click" href="/"><i class='bx bx-menu'></i></a>
</nav>

<main>
	<slot />
</main>

<div id="section-contact">
	<div class="contact-local">
        <!-- <i class='bx bxs-bolt'></i> -->
        <h2>Based in Poland</h2>
		<footer>&copy; 2023 by Adrianna. All rights reversed.</footer>
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


