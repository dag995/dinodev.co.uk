<script>
	import { page } from '$app/stores'
	import { Header, Footer } from '$lib/components/templates'

	let { children } = $props();
	
	// const globalSettings = $page.data.globalSettings

</script>

<svelte:head>
	<title>DinoDev.co.uk</title>
</svelte:head>

<main 
	class="{($page.url.pathname).replace('/', '') === '' ? 'home' : ($page.url.pathname).replace('/', '')}_page"
	style="
		min-height:100vh;
		--theme-color: #0b3e40; 
		--secondary-color: #ffb757; 
		--background: #e4d8bf; 
		--background-color: #e4d8bf;"
>

	<Header />
	
	<div id="content">
		{@render children?.()}
	</div>
	
	<Footer />
</main>