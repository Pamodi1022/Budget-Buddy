import { writable } from 'svelte/store';


let initial = [];

if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('expenses');
    initial = stored ? JSON.parse(stored) : [];
}

export const expenseStore = writable(initial);

if (typeof window !== 'undefined') {
    expenseStore.subscribe(value => {
        localStorage.setItem('expenses', JSON.stringify(value));
    });
}