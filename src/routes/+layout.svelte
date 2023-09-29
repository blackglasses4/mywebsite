<script>
	import '$lib/styles/main.css';
	import '$lib/styles/aboutme.css';
	import { page } from '$app/stores';
</script>
<header id="header">
	<a class="logo" href="/">adrianna <span>pawłowska</span></a>
	<input class="side-menu" type="checkbox" id="side-menu"/>
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>

	<nav class="nav">
		<ul class="menu">
			<li><a href="/about" class:active={$page.url.pathname == '/about/'}>o mnie</a></li>
			<li>
				<label for="styleSelect1" class="custom-select">
					<select class="subnavbtn" id="theme-selector" onchange="changeTheme(this.value)">
						<option value="light">Jasny</option>
						<option value="dark">Ciemny</option>
						<option value="auto">Systemowy</option>
					</select>
				</label>
			</li>
			<li>
				<select class="subnavbtn" onchange="window.location.href=this.value;" >
					<option value="0">Contact</option>
					<option value="https://www.instagram.com/3d.greengirl/">Instagram</option>
					<option value="https://www.facebook.com/profile.php?id=100013368822697">Facebook</option>
					<option value="https://github.com/blackglasses4">Github</option>
					<option value="https://www.linkedin.com/in/adrianna-paw%C5%82owska-a24850215/">Linkedln</option>
					<option value="mailto:adriannapx@gmail.com">Wyślij Email</option>
				</select>
			</li>
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

