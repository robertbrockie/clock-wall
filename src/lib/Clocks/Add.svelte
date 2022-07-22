<script>
	import Modal from '$lib/Modal.svelte';
	import { clockList } from '$lib/Clocks/store';

	export let tzOptions = [];

	let showModal = false;

	let name = '';
	let tz = '';

	function handleCreate() {
		clockList.updateClockList([
			...$clockList,
			{
				name,
				tz
			}
		]);

		resetForm();
		showModal = false;
	}

	function resetForm() {
		name = '';
		tz = '';
	}
</script>

<button on:click={() => (showModal = true)}>Add</button>

{#if showModal}
	<Modal hideClose={true} on:close={() => (showModal = false)}>
		<h2 slot="header">Add Clock</h2>

		<label><input bind:value={name} placeholder="name" /></label>
		<label>
			<select bind:value={tz}>
				{#each tzOptions as opt}
					<option >{opt}</option>
				{/each}
			</select>
		</label>

		<div class="buttons">
			<button on:click={handleCreate} disabled={!name || !tz}>create</button>
		</div>
	</Modal>
{/if}

<style>
	input, select {
		display: block;
		margin: 0 0 0.5em 0;
	}

	.buttons {
		clear: both;
	}
</style>
