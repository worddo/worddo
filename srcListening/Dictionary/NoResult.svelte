<script>
 import { slide } from 'svelte/transition'
</script>
<div id = 'noresult' transition:slide={{duration:300}}>Opp!! No data found.</div>


<style>
    #noresult{
        position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 5vh;
    background-color: #fb4242;
    color: #eeeeee;
    font-size: 2.5vh;
    font-family: cursive;
    border-radius: 1.5vh;
    text-align: left;
    padding-inline: 2vh;
    line-height: 5vh;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
</style>