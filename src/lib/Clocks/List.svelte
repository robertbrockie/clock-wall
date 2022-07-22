<script>
	import { flip } from 'svelte/animate';
	import { clockList } from "$lib/Clocks/store";
	import Clock from "$lib/Clocks/Clock.svelte";

	let hovering = false;

	const drop = (event, target) => {
		event.dataTransfer.dropEffect = 'move';
		const start = parseInt(event.dataTransfer.getData('text/plain'));
		const newList = [...$clockList];

		if (start < target) {
			newList.splice(target + 1, 0, newList[start]);
			newList.splice(start, 1);
		} else {
			newList.splice(target, 0, newList[start]);
			newList.splice(start + 1, 1);
		}

		clockList.updateClockList(newList);
		hovering = false;
	};

	const dragstart = (event, i) => {
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.dropEffect = 'move';
		const start = i;
		event.dataTransfer.setData('text/plain', start);
	};
</script>

<div class="clock-list">
	{#each $clockList as clock, index (clock.tz)}
		<div
			animate:flip
			draggable={true}
			on:dragstart={(event) => dragstart(event, index)}
			on:drop|preventDefault={(event) => drop(event, index)}
			ondragover="return false"
			on:dragenter={() => (hovering = index)}
			class:is-active={hovering === index}
		>
			<Clock {clock} />
		</div>
	{/each}
</div>

<style>
	.clock-list {
        padding: 0px 30px;
		display: grid;
		grid-template-columns: auto auto auto;
		grid-gap: 10px;
	}
</style>
