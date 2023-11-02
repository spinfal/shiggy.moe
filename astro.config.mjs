import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	site: "https://shiggy.moe",
	integrations: [preact()],
	output: "static",
	compressHTML: true,
	build: {
		sourcemap: true,
		format: "directory"
	}
});