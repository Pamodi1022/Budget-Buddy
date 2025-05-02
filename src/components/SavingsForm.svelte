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

<div class="bg-white p-4 rounded shadow mt-6">
    <h2 class="text-lg font-semibold mb-3">Set Savings Goal</h2>

    <input class="input" bind:value={goalName} placeholder="Goal Name" />
    <input class="input" type="number" bind:value={targetAmount} placeholder="Target Amount" />
    <input class="input" type="number" bind:value={currentAmount} placeholder="Current Saved (optional)" />

    <button class="mt-2 bg-purple-500 text-white px-4 py-1 rounded" on:click={addGoal}>
        Add Goal
    </button>
</div>

<style>
    .input {
        @apply block w-full mb-2 p-2 border rounded;
    }
</style>
