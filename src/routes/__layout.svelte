<script>
	import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import "../styles/global.css";
</script>

<svelte:head>
	<title>Time</title>
	<meta name="description" content="Who is where?" />
</svelte:head>

<main>
	<slot />
</main>

<Footer />
