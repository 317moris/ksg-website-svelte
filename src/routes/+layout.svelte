<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>KSG</title>
</svelte:head>

{@render children()}
