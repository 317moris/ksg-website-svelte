import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	presets: ['@chakra-ui/panda-preset'],
	preflight: true,
	include: ['./src/**/*.{js,jsx,ts,tsx,svelte}'],
	exclude: [],
	theme: {
		extend: {}
	},
	outdir: 'src/styled-system'
});
