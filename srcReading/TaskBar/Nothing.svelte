<script>
      import {  blur } from 'svelte/transition'
</script>

<img in:blur={{duration:1000}} src = "../images/withoutunderwhite.svg" alt = "logo">

<style>
        img {
            height: 7vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    }
</style>