<script>
// @ts-nocheck

    import { theme } from '../stores/themeStore.js';
    let currentTheme;

    theme.subscribe(t => (currentTheme = t));

    function toggleTheme() {
        theme.set(currentTheme === 'dark' ? 'light' : 'dark');
    }
</script>

<button
        class="fixed top-2 right-4 px-3 py-2 rounded-full border text-sm bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
        on:click={toggleTheme}
>
    {#if currentTheme === 'dark'}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.66 4.66l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
        Light Mode
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
        Dark Mode
    {/if}
</button>