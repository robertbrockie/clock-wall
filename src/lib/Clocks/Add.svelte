<script>
	import Modal from "$lib/Modal.svelte";
	import { clockList } from "$lib/Clocks/store";

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
	<Modal on:close={() => (showModal = false)}>
		<h2 slot="header">Add Clock</h2>

		<label><input bind:value={name} placeholder="name" /></label>
		<label><input bind:value={tz} placeholder="tz" /></label>

		<div class="buttons">
			<button on:click={handleCreate} disabled={!name || !tz}>create</button>
		</div>
	</Modal>
{/if}

<style>
	input {
		display: block;
		margin: 0 0 0.5em 0;
	}

	.buttons {
		clear: both;
	}
</style>
