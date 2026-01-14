import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	presets: ['@chakra-ui/panda-preset'],
	preflight: true,
	include: ['./src/**/*.{js,ts,svelte}'],
	exclude: [],
	outdir: 'src/styled-system',
	conditions: {
		extend: {
			light: '[data-color-mode=light] &',
			dark: '[data-color-mode=dark] &'
		}
	}
});
