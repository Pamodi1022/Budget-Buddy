<script>
    import "../app.css";
    import DarkModeToggle from '../components/DarkModeToggle.svelte';
    import NavBar from '../components/NavBar.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<DarkModeToggle />
<NavBar />
<slot />
<Footer />
