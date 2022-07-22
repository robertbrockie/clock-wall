<script>
    import AddClock from "$lib/Clocks/Add.svelte";
	import ClockList from "$lib/Clocks/List.svelte";
</script>

<svelte:head>
	<title>Time</title>
	<meta name="description" content="Who is where?" />
</svelte:head>

<div class="content">
	<h1>🕑 CLOCK WALL 🕑</h1>
	<h2>What time is it in other places?</h2>

	<ClockList />
    <br/>
    <AddClock/>
</div>

<style>
    h1 {
        text-align: center;
    }
	h2 {
		font-size: 1.5rem;
		text-align: center;
	}

	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>