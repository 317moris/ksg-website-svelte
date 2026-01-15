import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	presets: ['@chakra-ui/panda-preset'],
	preflight: true,
	include: ['./src/**/*.{js,ts,svelte}'],
	outdir: 'src/styled-system',
	conditions: {
		extend: {
			light: '[data-color-mode=light] &',
			dark: '[data-color-mode=dark] &'
		}
	},
	theme: {
		extend: {
			tokens: {
				fonts: {
					heading: {
						value: `Inter, "Noto Sans JP", sans-serif`
					},
					body: {
						value: `Inter, "Noto Sans JP", sans-serif`
					},
					mono: {
						value: `"Google Sans Code", "M PLUS 1 Code", monospace`
					}
				}
			}
		}
	}
});
