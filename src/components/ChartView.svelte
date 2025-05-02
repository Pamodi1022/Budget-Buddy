<script>
    import { onMount, onDestroy } from 'svelte';
    import { incomeStore } from '../stores/incomeStore.js';
    import { expenseStore } from '../stores/expenseStore.js';
    import { writable } from 'svelte/store';
    import { Chart, registerables } from 'chart.js';

    Chart.register(...registerables);

    // @ts-ignore
    let canvas;
    // @ts-ignore
    let chart;
    const balanceHistory = writable([]);

    // Calculate daily balance history
    function calculateBalanceHistory(incomes, expenses) {
        const allDates = new Set([
            ...incomes.map(i => i.date),
            ...expenses.map(e => e.date)
        ]);

        const sortedDates = Array.from(allDates).sort();
        let balance = 0;
        const history = sortedDates.map(date => {
            const incomeForDate = incomes
                .filter(i => i.date === date)
                .reduce((sum, i) => sum + i.amount, 0);

            const expenseForDate = expenses
                .filter(e => e.date === date)
                .reduce((sum, e) => sum + e.amount, 0);

            balance += incomeForDate - expenseForDate;
            return { date, balance };
        });

        balanceHistory.set(history);
    }

    $: calculateBalanceHistory($incomeStore, $expenseStore);

    onMount(() => {
        const unsubscribe = balanceHistory.subscribe(data => {
            if (chart) {
                chart.destroy();
            }
            chart = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: data.map(d => d.date),
                    datasets: [
                        {
                            label: 'Balance Over Time',
                            data: data.map(d => d.balance),
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            tension: 0.3,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });

        onDestroy(() => {
            unsubscribe();
            if (chart) chart.destroy();
        });
    });
</script>

<div id="balance-history" class="mt-8 p-4 bg-white dark:bg-gray-800 rounded shadow text-gray-200 dark:text-white">
    <h2 class="text-lg font-semibold mb-4">Balance History</h2>
    <canvas bind:this={canvas}></canvas>
</div>

