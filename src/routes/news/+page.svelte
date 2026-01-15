<script lang="ts">
	import { cx } from 'styled-system/css';
	import type { PageProps } from './$types';
	import { container } from 'styled-system/recipes';
	import { resolve } from '$app/paths';

	const { data }: PageProps = $props();
</script>

<main class={cx(container())}>
	{#each data.contents as post (`post-${post.id}`)}
		<a href={resolve('/news/[id]', { id: post.id })}>{post.title}</a>
	{/each}
</main>
