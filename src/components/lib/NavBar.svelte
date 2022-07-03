<script lang="ts">
    import logo from "../../assets/svelte.png";
    export let padding;

    let activeEl: HTMLDivElement;
    let ul: HTMLUListElement;

    const Active = (e: any) => {
        activeEl.style.left = e.target.offsetLeft + "px";
        activeEl.style.width = e.target.offsetWidth + "px";
    };
</script>

<nav class={`bg-light-1  ${padding} fixed w-full top-0 left-0 text-dark-1`}>
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
            <img src={logo} class="mr-3 h-6 sm:h-9" alt="Mehdi Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap"
                >Dr.Mehdi</span
            >
        </a>
        <div class="flex md:order-2">
            <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Get started</button
            >
            <button
                data-collapse-toggle="mobile-menu-4"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-4"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    /></svg
                >
                <svg
                    class="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    /></svg
                >
            </button>
        </div>
        <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
        >
            <ul
                class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg relative"
                bind:this={ul}
            >
                <div
                    class="activeEl absolute bg-primary-2 text-transparent rounded-lg top-7 h-[2px] w-[50px] transition-all left-8"
                    bind:this={activeEl}
                />
                <li>
                    <a
                        href="#"
                        class={`block`}
                        aria-current="page"
                        on:click={(e) => Active(e)}>Home</a
                    >
                </li>
                <li>
                    <a href="#" class={`block`} on:click={(e) => Active(e)}
                        >About</a
                    >
                </li>
                <li>
                    <a href="#" class={`block`} on:click={(e) => Active(e)}
                        >Services</a
                    >
                </li>
                <li>
                    <a href="#" class={`block`} on:click={(e) => Active(e)}
                        >Contact</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>

<style>
</style>
