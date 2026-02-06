<!-- eslint-disable svelte/no-navigation-without-resolve -->

<script lang="ts">
	import { resolve } from '$app/paths';
	import { css, cx } from 'styled-system/css';
	import { button, container, link } from 'styled-system/recipes';
	import koshoSVG from '$lib/assets/kosho.svg';
	import LucideSunMoon from '@lucide/svelte/icons/sun-moon';
	import { hstack } from 'styled-system/patterns';
	import { useTheme } from 'svelte-themes';
	import { Pages } from './pages';
	import { page as currentPage, navigating } from '$app/state';

	const theme = useTheme();
</script>

<header class={css({ borderBottomWidth: '1px', py: '2' })}>
	<div
		class={cx(
			container({ centerContent: true }),
			css({
				flexDir: 'row',
				maxW: 'none',
				justifyContent: 'space-between',
				pos: 'sticky',
				top: '0',
				zIndex: 'docked'
			})
		)}
	>
		<nav class={hstack({ gap: '4' })}>
			<a href={resolve('/')} class={cx(link(), css({ fontWeight: 'bold' }))}>
				<div class={css({ bgColor: 'bg.inverted', rounded: 'full', p: '1.5', boxSize: '9' })}>
					<img
						src={koshoSVG}
						alt="校章"
						class={css({
							filter: { base: 'invert(100%)', _dark: 'none' }
						})}
					/>
				</div>
				埼玉県立越谷総合技術高等学校
			</a>
			{#each Pages as page (`page-${page.label}-${page.href}`)}
				<!-- https://github.com/sveltejs/rfcs/pull/43 -->
				<!-- https://github.com/sveltejs/svelte/pull/17188 -->
				<a
					href={page.href}
					data-active={currentPage.url.pathname.startsWith(page.href) || undefined}
					data-loading={navigating.to?.url.pathname.startsWith(page.href) || undefined}
					class={cx(
						button({ variant: 'plain' }),
						css({
							px: '0',
							color: 'fg.muted',
							rounded: 'none',
							borderWidth: '0',
							borderYWidth: '2px',
							_active: { color: 'fg', fontWeight: 'bold', borderBottomColor: 'green.solid' },
							_loading: {
								animationName: 'pulse',
								animationDuration: '1.3s',
								animationIterationCount: 'infinite'
							}
						})
					)}
				>
					{page.label}
				</a>
			{/each}
		</nav>
		<div>
			<button
				class={cx(button({ variant: 'ghost' }), css({ px: '0' }))}
				onclick={() => {
					theme.theme = theme.theme === 'light' ? 'dark' : 'light';
				}}
			>
				<LucideSunMoon />
			</button>
		</div>
	</div>
</header>
