<script lang="ts">
    import Img from '@zerodevx/svelte-img'
    import { onMount } from 'svelte';
    // import InfinitiveLogos from '$lib/components/InfinitiveLogos.svelte';
    import aboutme from '$lib/assets/aboutme.jpg?as=run'
    // import homeBanerTwo from '$lib/assets/main-baner-1.jpg?as=run'
    // import certyfikat from '$lib/assets/certyfikat.jpg?as=run'

    const lang = 'pl';

</script>

<section id="welcome" class="section__welcome">
    <div class="section__welcome-content">
        <p>Pełny pasji</p>
        <h1>Freelance<br><span class="h1_green">Designer</span> & <span class="h1_green">Developer</span></h1>
        <p>zajmujący się tworzeniem unikalnych i inspirujących projektów</p>
    </div>
</section>

<section id="aboutme" class="section__aboutme">
    <div class="section__aboutme-areas">
        <div class="section__aboutme-area ab-one">
            <Img class="aboutme-img" src={aboutme} alt="Zdjęcie przedstawiające mnie" />
        </div>
        <div class="section__aboutme-area ab-two">
            <h1>Jestem samoukiem oraz studentem zajmujący się projektowaniem <strong>grafiki 3D</strong>
            oraz tworzeniem nowoczesnych <strong>stron internetowych</strong> pochodzący z Poznania, z Polski.</h1>
            <p>Studiuję Informatykę na trzecim roku na uniwersytecie MERITO WSB w Poznaniu.
            Poszukuję stażu lub pracy, która pozwoli mi poszerzyć horyzonty i odkryć nowe możliwości.</p>
        </div>
    </div>
</section>

