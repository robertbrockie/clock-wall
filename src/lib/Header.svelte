<script>
	import AddClock from '$lib/Clocks/Add.svelte';

	export let tzOptions;
</script>

<header>
	<nav>
		<div class="logo"><h1>🕑 CLOCK WALL 🕑</h1></div>
		<div>
			<AddClock {tzOptions} />
		</div>
	</nav>
</header>

<style>
	header {
		background-color: white;

		box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
		margin-bottom: 10px;
		padding: 0px 50px;
	}

	.logo {
		flex-grow: 1; /* this is the important bit */
	}

	nav {
		display: flex;
		flex-direction: row;
		align-items: center; /* aligns links vertically */

		width: 100%;
	}
</style>
