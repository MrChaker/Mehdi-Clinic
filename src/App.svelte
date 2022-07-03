<script lang="ts">
    import NavBar from "./components/lib/NavBar.svelte";

    import Hero from "./components/pages/Hero.svelte";

    const padding = "sm:p-4 sm:px-10 md:px-20 lg:px-40";
</script>

<main
    class={`${padding} bg-light-1 min-h-screen text-dark-1 font-medium font-main`}
>
    <NavBar {padding} />
    <Hero />
</main>

<style>
</style>
