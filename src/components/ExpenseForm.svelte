<script>
    import { expenseStore } from '../stores/expenseStore.js';

    let title = '';
    let amount = '';
    let category = '';
    let date = '';

    function addExpense() {
        if (!title || !amount || !category || !date) return;

        expenseStore.update(data => [
            ...data,
            { id: Date.now(), title, amount: parseFloat(amount), category, date }
        ]);

        title = '';
        amount = '';
        category = '';
        date = '';
    }
</script>

<div id="add-transactions" class="bg-white dark:bg-gray-800 p-4 rounded shadow text-gray-900 dark:text-white">
    <h2 class="text-lg font-semibold mb-3">Add Expense</h2>
    <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white" bind:value={title} placeholder="Title" />
    <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="number" bind:value={amount} placeholder="Amount" />
    <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white" bind:value={category} placeholder="Category" />
    <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="date" bind:value={date} />
    <button class="mt-2 bg-red-500 text-white px-4 py-1 rounded" on:click={addExpense}>
        Add
    </button>
</div>

<style>
    .input {
        @apply block w-full mb-2 p-2 border rounded;
    }
</style>
