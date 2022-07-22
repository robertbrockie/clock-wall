<script>
	import { onMount } from 'svelte';

	export let tz = "America/Montreal";

	let date = new Date();

    // TODO: fix the off by hour in the germany (and others)
	let tzDate = date.toLocaleString('en-US', { timeZone: tz });

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();

            tzDate = date.toLocaleString('en-US', { timeZone: tz });
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<p>{tzDate}</p>
<p>{tz}</p>
