<script lang="ts">
    import NavBar from "./components/lib/NavBar.svelte";

    import Hero from "./components/pages/Hero.svelte";

    const padding = "p-4 sm:px-10 md:px-20 lg:px-30 xl:px-40";
</script>

<main
    class={`${padding}  min-h-screen text-slate-900 font-normal font-main bg-slate-100`}
>
    <NavBar {padding} />

    <Hero />
</main>

<style>
    /* main {
        background-image: linear-gradient(120deg, #306bc55e, #e8ecec, #f7f7ff);
    } */
</style>
