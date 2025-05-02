<script>
    import { theme } from '../stores/themeStore.js';
    import DarkModeToggle from "./DarkModeToggle.svelte";

    function toggleTheme() {
        theme.update(current => (current === 'dark' ? 'light' : 'dark'));
    }

    // Enhanced smooth scrolling with offset
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            // Get the navbar height to offset scrolling
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            // Calculate the element's position relative to the document
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

            // Scroll to element with offset for the navbar
            window.scrollTo({
                top: elementPosition - navbarHeight - 20, // Additional 20px padding
                behavior: 'smooth'
            });
        }
    }
</script>

<nav class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 class="text-xl font-bold text-gray-800 dark:text-white">
            Personal Finance Dashboard
        </h1>
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            <button
                    on:click={() => scrollToSection('home')}
                    class="hover:text-blue-500 text-left"
            >
                Home
            </button>

        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            <button
                    on:click={() => scrollToSection('add-transactions')}
                    class="hover:text-blue-500 text-left"
            >
                Add Income/Expense
            </button>
            <button
                    on:click={() => scrollToSection('transaction-lists')}
                    class="hover:text-blue-500 text-left"
            >
                Transactions
            </button>
            <button
                    on:click={() => scrollToSection('set-savings')}
                    class="hover:text-blue-500 text-left"
            >
                Set Savings Goal
            </button>
            <button
                    on:click={() => scrollToSection('view-savings')}
                    class="hover:text-blue-500 text-left"
            >
                Savings Goals
            </button>
            <button
                    on:click={() => scrollToSection('balance-history')}
                    class="hover:text-blue-500 text-left"
            >
                Balance History
            </button>
            <button
                    on:click={() => scrollToSection('monthly-summary')}
                    class="hover:text-blue-500 text-left"
            >
                Monthly Summary
            </button>

            <DarkModeToggle />
        </div>
    </div>
</nav>