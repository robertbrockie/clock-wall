<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/tz.json');

		const tzOptions = await res.json();

		if (res.ok) {
			return {
				props: {
					tzOptions
				}
			};
		}
	}
</script>

<script>
	import ClockList from '$lib/Clocks/List.svelte';
	import Header from '$lib/Header.svelte';

    export let tzOptions;
</script>

<Header tzOptions={tzOptions.timezones} />

<div class="content">
	<ClockList />
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
