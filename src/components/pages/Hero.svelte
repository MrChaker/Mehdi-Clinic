<script lang="ts">
    import hero from "../../assets/doctor.png";
</script>

<div
    class="flex flex-col-reverse md:flex-row gap-10 md:gap-0 pt-40 md:pt-48 z-10 relative"
>
    <div
        class="flex flex-col justify-between align-baseline gap-4 mb:gap-8 m-auto md:mt-auto text-center md:text-left h-full w-4/5 md:min-w-[420px] lg:min-w-[460px] 2xl:min-w-[520px]"
    >
        <h1
            class="w-max m-auto md:m-0 text-3xl mb:text-4xl sm:text-5xl  2xl:text-6xl font-[900] bg-gradient-to-r from-primary-3 via-primary-2 to-primary-1 bg-clip-text text-transparent"
        >
            The beuaty clinic
        </h1>
        <p class="mb:text-lg sm:text-xl  lg:text-2xl 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            voluptatibus!
        </p>
        <button
            class="btn btn-primary px-10 w-fit m-auto md:m-0 text-xl  text-light-1 normal-case"
            >Book Now</button
        >
    </div>
    <div
        class="m-auto w-4/5 min-h-[180px] h-[35vw] md:min-w-[380px] md:h-[230px]  lg:min-w-[500px] lg:h-[280px] "
    >
        <div
            class="bg-primary-3 shape shadow-blueLG w-full h-full flex justify-center "
        >
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                src={hero}
                alt="doctor image"
                class=" self-end h-[150%] drop-shadow-white "
            />
        </div>
    </div>
    <!-- <div
        class="w-[150%] h-[200%] absolute -top-32 -left-1/4  bg-primary-focus rounded-full blur-3xl opacity-30 "
    /> -->
</div>

<style>
    .shape {
        border-radius: 1000px 120px 120px 60px;
    }
</style>
