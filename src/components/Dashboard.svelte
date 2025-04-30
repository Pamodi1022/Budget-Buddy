<script>
  import IncomeForm from '../components/IncomeForm.svelte';
  import ExpenseForm from '../components/ExpenseForm.svelte';
  import TransactionList from '../components/TransactionList.svelte';
  import SavingsForm from '../components/SavingsForm.svelte';
  import SavingsList from '../components/SavingsList.svelte';
  import ChartView from '../components/ChartView.svelte';

  import { incomeStore } from '../stores/incomeStore.js';
  import { expenseStore } from '../stores/expenseStore.js';

  import { derived } from 'svelte/store';

  // Calculated totals
  const totalIncome = derived(incomeStore, $incomeStore =>
          $incomeStore.reduce((sum, item) => sum + Number(item.amount), 0)
  );

  const totalExpenses = derived(expenseStore, $expenseStore =>
          $expenseStore.reduce((sum, item) => sum + Number(item.amount), 0)
  );

  const netIncome = derived(
          [totalIncome, totalExpenses],
          ([$totalIncome, $totalExpenses]) => $totalIncome - $totalExpenses
  );

  // Update and delete handlers
  function updateIncome(updated) {
    incomeStore.update(list =>
            list.map(item => (item.id === updated.id ? updated : item))
    );
  }

  function deleteIncome(id) {
    incomeStore.update(list => list.filter(item => item.id !== id));
  }

  function updateExpense(updated) {
    expenseStore.update(list =>
            list.map(item => (item.id === updated.id ? updated : item))
    );
  }

  function deleteExpense(id) {
    expenseStore.update(list => list.filter(item => item.id !== id));
  }
</script>

<!-- Summary Cards -->
<div class="p-4 max-w-6xl mx-auto">
  <h1 class="text-3xl font-bold mb-6 text-center">Personal Finance Dashboard</h1>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="bg-green-100 p-4 rounded shadow">
      <p class="text-gray-700">Total Income</p>
      <p class="text-2xl font-semibold">₹{$totalIncome}</p>
    </div>
    <div class="bg-red-100 p-4 rounded shadow">
      <p class="text-gray-700">Total Expenses</p>
      <p class="text-2xl font-semibold">₹{$totalExpenses}</p>
    </div>
    <div class="bg-blue-100 p-4 rounded shadow">
      <p class="text-gray-700">Net Income</p>
      <p class="text-2xl font-semibold">₹{$netIncome}</p>
    </div>
  </div>

  <!-- Forms -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <IncomeForm />
    <ExpenseForm />
  </div>

  <!-- Transaction Lists -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <TransactionList
            type="income"
            transactions={$incomeStore}
            on:update={e => updateIncome(e.detail)}
            on:delete={e => deleteIncome(e.detail)}
    />
    <TransactionList
            type="expense"
            transactions={$expenseStore}
            on:update={e => updateExpense(e.detail)}
            on:delete={e => deleteExpense(e.detail)}
    />
  </div>

  <!-- Savings Goals -->
  <SavingsForm />
  <SavingsList />

  <!-- Balance History Chart -->
  <ChartView />
</div>
