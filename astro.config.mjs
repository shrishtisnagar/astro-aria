import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://shrishtisnagar.github.io",
	base: "/astro-aria",
	integrations: [tailwind()],
});
