<section class="portfolio">
    <h1 class="h1-portfolio">Portfolio</h1>
</section>
<section class="main-home-three">
    <!-- Projekt 1 -->
    <div class="work__container">
        <div class="work__img-wrapper work__image5"></div>
        <div class="work__project work__content5">
            <p class="work__project-description1">Baner</p>
            <!-- <p class="work__project-description2">Wykonany w programie Blender wzorowany na podstawie
                tutorialu <q><i>Blender Beginner Tutorial Blender Guru</i></q></p> -->
            <!-- <a class="btn" href="/#">Three</a> -->
        </div>
        <div class="work__img-wrapper work__image6"></div>
        <div class="work__project work__content6">
            <p class="work__project-description1">Kostka 3D</p>
            <!-- <p class="work__project-description2">Wykonany w programie Blender wzorowany na podstawie
                tutorialu <q><i>Blender Beginner Tutorial Blender Guru</i></q></p> -->
            <!-- <a class="btn" href="/#">Three</a> -->
        </div>
        <div class="work__img-wrapper work__image7"></div>
        <div class="work__project work__content7">
            <p class="work__project-description1">Donut</p>
            <p class="work__project-description2">Wykonany w programie Blender wzorowany na podstawie
                tutorialu <q><i>Blender Beginner Tutorial Blender Guru</i></q></p>
            <!-- <a class="btn" href="/#">Three</a> -->
        </div>
        <div class="work__img-wrapper work__image8"></div>
        <div class="work__project work__content8">
            <p class="work__project-description1">Donut</p>
            <p class="work__project-description2">Wykonany w programie Blender wzorowany na podstawie
                tutorialu <q><i>Blender Beginner Tutorial Blender Guru</i></q></p>
            <!-- <a class="btn" href="/#">Three</a> -->
        </div>
        <div class="work__img-wrapper work__image9"></div>
        <div class="work__project work__content9">
            <p class="work__project-description1">Donut</p>
            <p class="work__project-description2">Wykonany w programie Blender wzorowany na podstawie
                tutorialu <q><i>Blender Beginner Tutorial Blender Guru</i></q></p>
            <!-- <a class="btn" href="/#">Three</a> -->
        </div>
        <div class="work__img-wrapper work__image10"></div>
        <div class="work__project work__content10">
            <p class="work__project-description1">Donut</p>
            <p class="work__project-description2">Wykonany w programie Blender wzorowany na podstawie
                tutorialu <q><i>Blender Beginner Tutorial Blender Guru</i></q></p>
            <!-- <a class="btn" href="/#">Three</a> -->
        </div>
        <div class="work__img-wrapper work__image11"></div>
        <div class="work__project work__content11">
            <p class="work__project-description1">Donut</p>
            <p class="work__project-description2">Wykonany w programie Blender wzorowany na podstawie
                tutorialu <q><i>Blender Beginner Tutorial Blender Guru</i></q></p>
            <!-- <a class="btn" href="/#">Three</a> -->
        </div>
        <div class="work__img-wrapper work__video12">
            <video height="360px"
            width="640px" controls>
                <track default kind="captions">
                <source src="/projects3D/flower_geometry_nodes-1-120.mp4" type="video/mp4">
            </video>
        </div>
        <div class="work__project work__content12">
            <p class="work__project-description1">Donut</p>
            <p class="work__project-description2">Wykonany w programie Blender wzorowany na podstawie
                tutorialu <q><i>Blender Beginner Tutorial Blender Guru</i></q></p>
            <!-- <a class="btn" href="/#">Three</a> -->
        </div>
    </div>
</section>








<!-- 
<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    // const loader = new GLTFLoader();

    function ada() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        //document.body.appendChild(renderer.domElement);
        const el = document.getElementById('cos');
        if (el) {
            el.appendChild(renderer.domElement);
        }

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;
        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();
    }

    onMount(async () => {
        ada();
    });
</script> -->