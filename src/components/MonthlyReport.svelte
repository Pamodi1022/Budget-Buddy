<script>
// @ts-nocheck

    import { incomeStore } from '../stores/incomeStore.js';
    import { expenseStore } from '../stores/expenseStore.js';
    import { groupByMonth } from '../utils/dateUtils.js';
    import { derived } from 'svelte/store';

    const monthlyReport = derived(
        [incomeStore, expenseStore],
        ([$incomes, $expenses]) => {
            const incomeGroups = groupByMonth($incomes);
            const expenseGroups = groupByMonth($expenses);

            const allMonths = new Set([...Object.keys(incomeGroups), ...Object.keys(expenseGroups)]);
            const sortedMonths = Array.from(allMonths).sort();

            return sortedMonths.map(month => {
                const income = incomeGroups[month] || [];
                const expense = expenseGroups[month] || [];

                const incomeTotal = income.reduce((sum, t) => sum + t.amount, 0);
                const expenseTotal = expense.reduce((sum, t) => sum + t.amount, 0);

                return {
                    month,
                    incomeTotal,
                    expenseTotal,
                    net: incomeTotal - expenseTotal,
                    incomeCount: income.length,
                    expenseCount: expense.length
                };
            });
        }
    );
</script>

<div id="monthly-summary" class="mt-10">
    <h2 class="text-xl font-semibold mb-3">Monthly Summary</h2>

    <table class="w-full text-sm border dark:text-white">
        <thead class="bg-gray-100 dark:bg-gray-700">
        <tr>
            <th class="p-2 text-left">Month</th>
            <th class="p-2 text-right">Income (₹)</th>
            <th class="p-2 text-right">Expenses (₹)</th>
            <th class="p-2 text-right">Net (₹)</th>
            <th class="p-2 text-right">Transactions</th>
        </tr>
        </thead>
        <tbody>
        {#each $monthlyReport as row}
            <tr class="border-t dark:border-gray-600">
                <td class="p-2">{row.month}</td>
                <td class="p-2 text-right">{row.incomeTotal.toFixed(2)}</td>
                <td class="p-2 text-right">{row.expenseTotal.toFixed(2)}</td>
                <td class="p-2 text-right">{row.net.toFixed(2)}</td>
                <td class="p-2 text-right">
                    {row.incomeCount + row.expenseCount}
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
