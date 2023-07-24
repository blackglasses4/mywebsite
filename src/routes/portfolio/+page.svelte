<section class="portfolio">
    <h1 class="p">Portfolio</h1>
</section>

<a id="first" href="#"><div class="project first"></div></a>
<button class="button">hey</button>
<div id="second" class="project second"></div>
<div id="thirst" class="project thirst"></div>



<!-- <script>
    const button = document.querySelector(".button");
    const text = document.querySelector(".p");
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const thirst = document.getElementById("thirst");
    
    button?.addEventListener("click", function() {
        text?.classList.toggle("change");
    });
</script> -->








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