<script lang="ts">
    import hero from "../../assets/doctor.png";
</script>

<div
    class="flex flex-col-reverse md:flex-row gap-10 md:gap-0 mt-40 z-10 relative"
>
    <div
        class="flex flex-col justify-between align-baseline gap-8 m-auto md:mt-auto text-center md:text-left h-full w-4/5 md:w-3/5 md:min-w-[424px] lg:min-w-[500px]"
    >
        <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-[900] bg-gradient-to-r from-primary-3 via-primary-2 to-primary-1 bg-clip-text text-transparent"
        >
            The beuaty clinic
        </h1>
        <p class="text-xl sm:text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            voluptatibus!
        </p>
        <button
            class="btn btn-primary w-fit m-auto md:m-0 sm:btn-wide text-lg sm:text-xl"
            >Book Now</button
        >
    </div>
    <div class="w-3/4 m-auto md:w-2/5 min-w-[200px] md:min-w-[340px] ">
        <div
            class="bg-primary-3 shape shadow-blueLG w-full flex justify-center h-[50vw] min-h-[150px] sm:h-[40vh] lg:h-[50vh]"
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
        border-radius: 100% 50px 50px 50px;
    }
</style>
