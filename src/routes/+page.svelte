<script>
  	import '$lib/styles/css/main.css';
	// import '$lib/styles/about.css';
	// import '$lib/styles/ofert.css';
	// import '$lib/styles/contact.css';

    import { navigateToPreferredLanguageVersion } from '$lib/i18n/utils';
    
    navigateToPreferredLanguageVersion();
</script>

<header id="header">
    <!-- <a href="/"><img class="logo" src="/image/logo.png" alt="logo firmy Telmech"/></a> -->
</header>
<body>
	<section class="section_preloader">
		<p class="section_preloader-p">Wybierz wersję językową strony / Select language version page</p>
		<div class="section_preloader-language">
			<div class="lang-pl">
				<p><img src="/flag/32/en.png" alt='English' /><a href="/en" rel="internal">Angielski</a></p>
			<div class="lang-en">
				<p><img src="/flag/32/pl.png" alt='Polski' /><a href="/pl" rel="internal">Polski</a></p>
			</div>
		</div>
	</section>
</body>
