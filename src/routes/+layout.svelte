<script>
	import '$lib/styles/main.css';
	import '$lib/styles/aboutme.css';
	// import '$lib/styles/portfolio.css';
	import { page } from '$app/stores';
</script>
<header id="header">
	<!-- Logo -->
	<a class="logo" href="/">adrianna <span>pawłowska</span></a>
	<!-- Hamburger icon -->
	<input class="side-menu" type="checkbox" id="side-menu"/>
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
	<!-- Menu -->
	<nav class="nav">
		<ul class="menu">
			<li>
				<select id="theme-selector" onchange="changeTheme(this.value)">
					<option value="light">Light</option>
					<option value="dark">Dark</option>
					<option value="auto">Auto</option>
				</select>
			</li>
			<li><a href="/about" class:active={$page.url.pathname == '/about/'}>o mnie</a></li>
			<li class="subnav">
				<p class="subnavbtn">Contact <i class='bx bxs-down-arrow'></i></p>
				<div class="subnav-content">
					<a href="https://www.instagram.com/3d.greengirl/"><i class='bx bx-right-arrow-alt'></i> Instagram</a>
					<a href="https://www.facebook.com/profile.php?id=100013368822697"><i class='bx bx-right-arrow-alt'></i> Facebook</a>
					<a href="https://github.com/blackglasses4"><i class='bx bx-right-arrow-alt'></i> Github</a>
					<a href="https://www.linkedin.com/in/adrianna-paw%C5%82owska-a24850215/"><i class='bx bx-right-arrow-alt'></i> Linkedln</a>
					<a href="mailto:adriannapx@gmail.com"><i class='bx bx-right-arrow-alt'></i> Wyślij Email</a>
				</div>
			</li>
			<li id="theme"><i class='bx bxs-moon'></i></li>
		</ul>
	</nav>
</header>

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

