<script lang="ts">
    import hero from "../../assets/doctor.png";
    import Button from "../lib/Button.svelte";
</script>

<div class="flex flex-col-reverse md:flex-row gap-10 md:gap-0 mt-40 ">
    <div
        class="flex flex-col justify-between align-baseline h-1/2 mb-4 gap-8 w-4/5 md:w-3/5 m-auto md:m-0 text-center"
    >
        <h1
            class="text-3xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary-3 via-primary-2 to-primary-1 bg-clip-text text-transparent"
        >
            The beuaty clinic
        </h1>
        <p class="text-xl sm:text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            voluptatibus!
        </p>
        <Button />
    </div>
    <div class="w-4/5 m-auto md:w-2/5 min-w-[200px] md:min-w-[340px] ">
        <div
            class="bg-primary-3 shape shadow-blueLG h-64 w-full flex justify-center h-[50vw] min-h-[150px] sm:h-[40vh] lg:h-[50vh]"
        >
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                src={hero}
                alt="doctor image"
                class=" self-end h-[150%] drop-shadow-white "
            />
        </div>
    </div>
</div>

<style>
    .shape {
        border-radius: 100% 50px 50px 50px;
    }
</style>
