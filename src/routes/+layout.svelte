<script lang="ts">
	import '../app.css';
	import Header from '../components/navigation/header.svelte';
	import { SvelteTheme } from 'svelte-themes';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=M+PLUS+1+Code:wght@100..700&family=Noto+Sans+JP:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<SvelteTheme attribute="data-color-mode">
	<Header />
	{@render children()}
</SvelteTheme>
