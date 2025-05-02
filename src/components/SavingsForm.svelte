<script>
    import { savingsStore } from '../stores/savingsStore.js';

    let goalName = '';
    let targetAmount = '';
    let currentAmount = '';

    function addGoal() {
        if (!goalName || !targetAmount) return;

        savingsStore.update(data => [
            ...data,
            {
                id: Date.now(),
                goalName,
                targetAmount: parseFloat(targetAmount),
                currentAmount: parseFloat(currentAmount) || 0
            }
        ]);

        // Clear form
        goalName = '';
        targetAmount = '';
        currentAmount = '';
    }
</script>

<div  id="set-savings" class="bg-white dark:bg-gray-800 p-4 rounded shadow text-gray-900 dark:text-white">
    <h2 class="text-lg font-semibold mb-3">Set Savings Goal</h2>

    <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white" bind:value={goalName} placeholder="Goal Name" />
    <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="number" bind:value={targetAmount} placeholder="Target Amount" />
    <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="number" bind:value={currentAmount} placeholder="Current Saved (optional)" />

    <button class="mt-2 bg-purple-500 text-white px-4 py-1 rounded" on:click={addGoal}>
        Add Goal
    </button>
</div>

<style>
    .input {
        @apply block w-full mb-2 p-2 border rounded;
    }
</style>
