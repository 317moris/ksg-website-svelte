<script lang="ts">
	import { cx } from 'styled-system/css';
	import { center } from 'styled-system/patterns';
	import { container, heading } from 'styled-system/recipes';
</script>

<main class={cx(container())}>
	<hgroup class={center({ h: '40rem' })}>
		<h1 class={cx(heading({ size: '7xl' }))}>KSG</h1>
	</hgroup>
	<section>
		<h2 class={heading()}>ニュース</h2>
	</section>
	<section>
		<h2 class={heading()}>学科</h2>
	</section>
	<section>
		<h2 class={heading()}>場所</h2>
	</section>
</main>
