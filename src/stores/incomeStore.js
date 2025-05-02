import { writable } from 'svelte/store';

let initial = [];

if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('incomes');
    initial = stored ? JSON.parse(stored) : [];
}

export const incomeStore = writable(initial);

if (typeof window !== 'undefined') {
    incomeStore.subscribe(value => {
        localStorage.setItem('incomes', JSON.stringify(value));
    });
}
