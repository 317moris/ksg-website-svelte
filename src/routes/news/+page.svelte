<script lang="ts">
	import { css, cx } from 'styled-system/css';
	import type { PageProps } from './$types';
	import { button, container, link } from 'styled-system/recipes';
	import LucideExternalLink from '@lucide/svelte/icons/external-link';
	import { resolve } from '$app/paths';
	import { TZDate } from '@date-fns/tz';

	const { data }: PageProps = $props();
</script>

<main class={cx(container(), css({ maxW: 'prose', spaceY: '8' }))}>
	<a href={resolve('/news/feed.xml')} target="_blank" class={button({ size: 'sm' })}
		>RSS<LucideExternalLink aria-hidden /></a
	>
	{#each data.posts as post (`post-${post.link}`)}
		{@const publishedAt = new TZDate(post.publishedAt, 'Asia/Tokyo')}
		<article class={css({ colorPalette: 'green', borderBottomWidth: '1px' })}>
			<h1 class={link()}>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={post.link} target="_blank">{post.title}</a>
			</h1>
			<time datetime={publishedAt.toISOString()}>{publishedAt.toISOString()}</time>
			<p>{post.author}</p>
		</article>
	{/each}
</main>
