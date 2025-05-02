<script>
    import { savingsStore } from '../stores/savingsStore.js';

    function deleteGoal(id) {
        savingsStore.update(goals => goals.filter(goal => goal.id !== id));
    }

    function calculateProgress(goal) {
        const { currentAmount, targetAmount } = goal;
        return Math.min((currentAmount / targetAmount) * 100, 100).toFixed(1);
    }
</script>

<div class="mt-6">
    <h2 class="text-xl font-semibold mb-3">Savings Goals</h2>

    {#if $savingsStore.length === 0}
        <p class="text-gray-500">No savings goals yet.</p>
    {:else}
        <ul class="space-y-4">
            {#each $savingsStore as goal}
                <li class="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow text-gray-900 dark:text-white">
                    <div class="flex justify-between items-center mb-2">
                        <div>
                            <p class="font-semibold text-lg">{goal.goalName}</p>
                            <p class="text-sm text-gray-200 ">
                                ₹{goal.currentAmount} / ₹{goal.targetAmount}
                            </p>
                        </div>
                        <button
                                class="bg-red-500 text-white px-3 py-1 rounded"
                                on:click={() => deleteGoal(goal.id)}
                        >
                            Delete
                        </button>
                    </div>

                    <!-- Progress Bar -->
                    <div class="w-full bg-gray-300 dark:bg-gray-600 h-3 rounded-full overflow-hidden">
                        <div class="bg-green-500 h-full transition-all duration-300 text-gray-200" style="width: {calculateProgress(goal)}%">
                        </div>
                    </div>
                    <p class="text-sm text-right text-gray-200 mt-1 ">
                        {calculateProgress(goal)}% saved
                    </p>
                </li>
            {/each}
        </ul>
    {/if}
</div>
