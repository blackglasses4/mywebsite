<script lang="ts">
    import Img from '@zerodevx/svelte-img'
    import { onMount } from 'svelte';
    // import InfinitiveLogos from '$lib/components/InfinitiveLogos.svelte';
    import aboutme from '$lib/assets/aboutme.jpg?as=run'
    import svelte from '$lib/assets/svelte.png?as=run'
    // import homeBanerTwo from '$lib/assets/main-baner-1.jpg?as=run'
    // import certyfikat from '$lib/assets/certyfikat.jpg?as=run'

    const lang = 'en';

</script>

<section id="welcome" class="section__welcome">
    <div class="section__welcome-content">
        <p>Passionate</p>
        <h1>Freelance<br><span class="h1_green">Designer</span> & <span class="h1_green">Developer</span></h1>
        <p>dedicated to creating unique and inspiring projects</p>
    </div>
</section>

<section id="aboutme" class="section__aboutme">
    <div class="section__aboutme-areas">
        <div class="section__aboutme-area ab-one">
            <Img class="aboutme-img" src={aboutme} alt="Zdjęcie przedstawiające mnie" />
        </div>
        <div class="section__aboutme-area ab-two">
            <h1>I am a self-taught and a student involved in <strong>3D graphics design</strong>
                and modern <strong>web development</strong> coming from Poznan, Poland.</h1>
            <p>I am studying Computer Science in my third year at MERITO WSB University in Poznan.
            I am looking for an internship or job that will allow me to broaden my horizons and
            discover new opportunities.</p>
        </div>
    </div>
</section>

<section id="skill" class="section__skill">
    <div class="section__skill-content">
        <h1>My skills</h1>
        <p>I have gained knowledge in designing two-dimensional as well as three-dimensional
        world using tools such as Blender, Gimp, Inkscape and Krita.</p>
        <p> And in designing and programming websites, I have gained proficiency in using
        technologies such as: HTML, CSS, Sass, JavaScript and Figma.</p>
    </div>
</section>

<section id="project" class="section__project">
    <div class="section__project-content">
        <h1>Featured Projects</h1>

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
                <Img class="project-img" src={aboutme} alt="Zdjęcie przedstawiające mnie" />
            </div>
        </div>

        <div class="projects projects-next">
            <h2>My portfolio website</h2><hr>
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
                <Img class="project-img" src={aboutme} alt="Zdjęcie przedstawiające mnie" />
            </div>
        </div>
    </div>
</section>

