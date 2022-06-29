<script lang="ts">
    import hero from "../../assets/heroImage.png";
    import Button from "../lib/Button.svelte";
</script>

<div class="flex">
    <div
        class="flex flex-col justify-between align-baseline h-1/2 mt-auto mb-4 gap-8 "
    >
        <h1 class="text-6xl font-extrabold">The beuaty clinic</h1>
        <p class="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            voluptatibus!
        </p>
        <Button />
    </div>
    <div class="div">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={hero} alt="doctor image" />
    </div>
</div>
