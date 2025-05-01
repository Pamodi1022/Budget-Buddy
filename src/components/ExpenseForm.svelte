<script>
    import { incomeStore } from '../stores/incomeStore.js';

    let source = '';
    let amount = '';
    let date = '';

    function addIncome() {
        if (!source || !amount || !date) return;

        incomeStore.update(data => [
            ...data,
            { id: Date.now(), source, amount: parseFloat(amount), date }
        ]);

        source = '';
        amount = '';
        date = '';
    }
</script>

<div class="bg-white p-4 rounded shadow">
    <h2 class="text-lg font-semibold mb-3">Add Income</h2>
    <input class="input" bind:value={source} placeholder="Source" />
    <input class="input" type="number" bind:value={amount} placeholder="Amount" />
    <input class="input" type="date" bind:value={date} />
    <button class="mt-2 bg-green-500 text-white px-4 py-1 rounded" on:click={addIncome}>
        Add
    </button>
</div>

<style>
    .input {
        @apply block w-full mb-2 p-2 border rounded;
    }
</style>
