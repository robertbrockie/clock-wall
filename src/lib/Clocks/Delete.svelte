<script>
	import Modal from '$lib/Modal.svelte';
	import { clockList } from "$lib/Clocks/store";

    export let id;

	let showModal = false;

	function handleDelete() {
        clockList.updateClockList($clockList.filter(p => p.tz !== id));
        showModal = false;
	}
</script>

<button on:click={() => (showModal = true)}>🗑️</button>

{#if showModal}
	<Modal hideClose={true} on:close={() => (showModal = false)}>
		<h2 slot="header">Delete Clock?</h2>
		<div class="buttons">
			<button on:click={handleDelete}>Yes</button>
            <button on:click={() => (showModal = false)}>No</button>
		</div>
	</Modal>
{/if}

<style>
	.buttons {
		clear: both;
	}
</style>
