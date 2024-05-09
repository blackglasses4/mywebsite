import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { imagetools } from '@zerodevx/svelte-img/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools({
			profiles: {
			  run: new URLSearchParams('w=480;640;1024;1280;1920&format=jpg')
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
