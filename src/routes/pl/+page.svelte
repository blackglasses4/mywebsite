<script lang="ts">
    import Img from '@zerodevx/svelte-img'
    import { onMount } from 'svelte';
    // import InfinitiveLogos from '$lib/components/InfinitiveLogos.svelte';
    import aboutme from '$lib/assets/about_me.jpg?as=run'
    import telmech from '$lib/assets/telmech.png?as=run'
    import mywebsite from '$lib/assets/my_website.png?as=run'
    // import svelte from '$lib/assets/svelte.png?as=run'
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

<section id="skill" class="section__skill">
    <div class="section__skill-content">
        <h1>Moje umiejętności</h1>
        <p>Zdobyłam wiedzę w zakresie projektowania świata dwuwymiarowego jak i trójwymiarowego z użyciem 
        narzędzi takich jak: Blender, Gimp, Inkscape oraz Krita.</p>
        <p>Zaś przy projektowaniu oraz programowaniu stron internetowych zdobyłam biegłość w posługiwaniu
         się technologiami takimi jaki: HTML, CSS, Sass, JavaScript oraz Figma.</p>
    </div>
</section>

<section id="project" class="section__project">
    <div class="section__project-content">
        <h1>Wyróżnione Projekty</h1>

        <div class="projects">
            <h2>Telmech</h2><hr>
            <div class="projects__details">
                <div class="projects__details-lang">
                    <p>Web Design &vert; Frontend Development <span class="green-data">2024</span></p>
                    <i class='bx bxl-html5'></i>
                    <i class='bx bxl-css3' ></i>
                    <i class='bx bxl-javascript'></i>
                    <i class='bx bxl-figma' ></i>
                </div>
                <div class="projects__details-lang">
                    <div class="details-pages">
                        <div class="details-page">
                            <p><a target="_blank" aria-label="Anchor to be moved to the telmech site"
                            href="https://www.telmech.com.pl" rel="noopener noreferrer"
                        ><i class='bx bx-world'></i></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="projects__img">
                <Img class="project-img" src={telmech} alt="Mockup, stworzony ze strony Canva,
                przedstawiający laptop i telefon ze stroną Telmech" />
            </div>
        </div>

        <div class="projects projects-next">
            <h2>Moja strona portfolio</h2><hr>
            <div class="projects__details">
                <div class="projects__details-lang">
                    <p>Web Design &vert; Frontend Development <span class="green-data">2024</span></p>
                    <i class='bx bxl-html5'></i>
                    <i class='bx bxl-css3' ></i>
                    <i class='bx bxl-sass' ></i>
                    <i class='bx bxl-javascript'></i>
                    <i class='bx bxl-figma' ></i>
                </div>
                <div class="projects__details-lang">
                    <div class="details-pages">
                        <div class="details-page">
                            <p><a target="_blank" aria-label="Anchor to be moved to the telmech site"
                            href="https://adrianna.mooo.com/"
                            rel="noopener noreferrer" ><i class='bx bx-world'></i></a></p>
                        </div>
                        <div class="details-page">
                            <p><a target="_blank" aria-label="Anchor to transfer to the
                            company Facebook page" href="https://github.com/blackglasses4/mywebsite"
                            rel="noopener noreferrer" ><i class='bx bxl-github' ></i></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="projects__img">
                <Img class="project-img" src={mywebsite} alt="Mockup, stworzony ze strony Canva,
                przedstawiający laptop i telefon z moją stroną" />
            </div>
        </div>
    </div>
</section>

<!-- back to top -->
<a href="#header" class="back-to-top">
    <i class='bx bx-up-arrow-alt'></i>
</a>