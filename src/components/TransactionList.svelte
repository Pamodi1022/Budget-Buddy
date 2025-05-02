<script>
    import { createEventDispatcher } from 'svelte';

    export let transactions = [];
    export let type = ''; // 'income' or 'expense'

    const dispatch = createEventDispatcher();

    let editingId = null;
    let editedItem = {};

    function startEdit(id) {
        editingId = id;
        editedItem = { ...transactions.find(t => t.id === id) };
    }

    function cancelEdit() {
        editingId = null;
        editedItem = {};
    }

    function saveEdit() {
        dispatch('update', editedItem);
        cancelEdit();
    }

    function deleteItem(id) {
        dispatch('delete', id);
    }
</script>

<div class="mt-6">
    <h2 class="text-xl font-semibold mb-3 capitalize">{type} Transactions</h2>

    {#if transactions.length === 0}
        <p class="text-gray-500">No {type} entries yet.</p>
    {:else}
        <table class="w-full table-auto border text-sm dark:text-white">
            <thead class="bg-gray-100 dark:bg-gray-700">
            <tr>
                <th class="p-2 text-left">Title / Source</th>
                <th class="p-2 text-left">Amount</th>
                {#if type === 'expense'}<th class="p-2 text-left">Category</th>{/if}
                <th class="p-2 text-left">Date</th>
                <th class="p-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {#each transactions as item}
                <tr class="border-t dark:border-gray-600">
                    {#if editingId === item.id}
                        <td class="p-2">
                            <input
                                    class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    bind:value={editedItem[type === 'income' ? 'source' : 'title']}
                            />

                        </td>
                        <td class="p-2">
                            <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                   type="number" bind:value={editedItem.amount} />
                        </td>
                        {#if type === 'expense'}
                            <td class="p-2">
                                <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white" bind:value={editedItem.category} />
                            </td>
                        {/if}
                        <td class="p-2">
                            <input class="input dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="date" bind:value={editedItem.date} />
                        </td>
                        <td class="p-2 text-center">
                            <button class="btn-blue mr-1" on:click={saveEdit}>Save</button>
                            <button class="btn-gray" on:click={cancelEdit}>Cancel</button>
                        </td>
                    {:else}
                        <td class="p-2">{item.title || item.source}</td>
                        <td class="p-2">₹{item.amount}</td>
                        {#if type === 'expense'}<td class="p-2">{item.category}</td>{/if}
                        <td class="p-2">{item.date}</td>
                        <td class="p-2 text-center">
                            <button class="btn-blue mr-1" on:click={() => startEdit(item.id)}>Edit</button>
                            <button class="btn-red" on:click={() => deleteItem(item.id)}>Delete</button>
                        </td>
                    {/if}
                </tr>
            {/each}
            </tbody>
        </table>
    {/if}
</div>

<style>
    .btn-blue {
        @apply bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded;
    }
    .btn-red {
        @apply bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded;
    }
    .btn-gray {
        @apply bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-2 py-1 rounded;
    }
</style>
