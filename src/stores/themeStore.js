import { writable } from 'svelte/store';

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
export const theme = writable(stored || 'light');

theme.subscribe(value => {
    if (typeof document !== 'undefined') {
        localStorage.setItem('theme', value);
        document.documentElement.classList.toggle('dark', value === 'dark');
    }
});
