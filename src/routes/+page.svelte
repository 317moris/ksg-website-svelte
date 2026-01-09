<script>
	import { ExternalLink } from '@lucide/svelte';
	import { container, heading, icon, link } from 'styled-system/recipes';
</script>

<main class={container()}>
	<h1 class={heading()}>KSG</h1>
	<a
		href="https://github.com/317moris/ksg-website-svelte"
		target="_blank"
		referrerpolicy="no-referrer"
		class={link()}
	>
		GitHub
		<span aria-hidden="true" class={icon({ size: 'sm' })}>
			<ExternalLink size="current" />
		</span>
	</a>
</main>
