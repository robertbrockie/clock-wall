<script>
    import Time from '$lib/Clocks/Time.svelte';
    import DeleteClock from '$lib/Clocks/Delete.svelte';

	export let clock;
</script>

<div class="clock">
	{clock.name}
	<br />
	<Time tz={clock.tz} />
    <br />
    <DeleteClock id={clock.tz} />
</div>

<style>
.clock {
    background-color: rgb(194, 207, 194);
    border: 1px solid rgb(59, 37, 37);
    padding: 5px;
}
</style>
