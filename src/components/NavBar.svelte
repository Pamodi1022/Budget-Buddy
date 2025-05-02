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
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - navbarHeight - 20,
                behavior: 'smooth'
            });
        }
    }
</script>

<nav class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <!-- Logo and Brand -->
            <div class="flex items-center gap-2">
                <img src="/logo.png" alt="Personal Finance Logo" class="h-8 w-auto" />
                <span class="text-xl font-semibold text-gray-800 dark:text-white hidden sm:block">
                    Budget Buddy
                </span>
            </div>

            <!-- Navigation Links -->
            <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
                <button
                    on:click={() => scrollToSection('home')}
                    class="nav-link hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    Home
                </button>
                <button
                    on:click={() => scrollToSection('add-transactions')}
                    class="nav-link hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    Add Transaction
                </button>
                <button
                    on:click={() => scrollToSection('transaction-lists')}
                    class="nav-link hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    Transactions
                </button>
                <button
                    on:click={() => scrollToSection('set-savings')}
                    class="nav-link hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    Set Goal
                </button>
                <button
                    on:click={() => scrollToSection('view-savings')}
                    class="nav-link hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    Goals
                </button>
                <button
                    on:click={() => scrollToSection('balance-history')}
                    class="nav-link hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    Balance
                </button>
                <button
                    on:click={() => scrollToSection('monthly-summary')}
                    class="nav-link hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    Summary
                </button>
            </div>

            <!-- Dark Mode Toggle -->
            <div class="flex items-center">
                <DarkModeToggle />
            </div>
        </div>
    </div>
</nav>

<style>
    .nav-link {
        @apply text-gray-700 dark:text-gray-100 px-2 py-1 rounded-md font-medium;
    }
    .nav-link:hover {
        @apply bg-gray-100 dark:bg-gray-700 dark:text-white;
    }
</style>