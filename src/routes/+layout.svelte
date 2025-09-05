<script>
	import { page } from '$app/stores'
	import { Header, Footer } from '$lib/components/templates'

	let { children } = $props();
	
	// const globalSettings = $page.data.globalSettings

</script>

<svelte:head>
	<title>Daniel Groves • Bristol</title>
</svelte:head>

<main 
	class="{($page.url.pathname).replace('/', '') === '' ? 'home' : ($page.url.pathname).replace('/', '')}_page"
	style="
		min-height:100vh;
		--theme-color: #062e4b; 
		--theme-red: #DE1F32; 
		--secondary-color: #416691; 
		--background: #E6EEF4; 
		--background-color: #FFF;"
>

	<Header />
	
	<div id="content">
		{@render children?.()}
	</div>
	
	<Footer />
</main>