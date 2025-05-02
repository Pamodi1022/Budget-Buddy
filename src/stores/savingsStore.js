import { writable } from 'svelte/store';

let initial = [];

if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('savings');
    initial = stored ? JSON.parse(stored) : [];
}

export const savingsStore = writable(initial);

if (typeof window !== 'undefined') {
    savingsStore.subscribe(value => {
        localStorage.setItem('savings', JSON.stringify(value));
    });
}