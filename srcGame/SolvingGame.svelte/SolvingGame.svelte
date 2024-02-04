<script>
  import { onMount } from "svelte";
  import { TFlist, changingUserAi, listresEnter, nofi, searchDicTF } from "../store";
import DisWords from "./DisWords.svelte";
  import YouMe from "./YouMe.svelte";
    // if ListresEnter or TFList update -> Test, if user = ai thinking
    

</script>
<div id = 'containSov'>
    <YouMe/>
    {#each $TFlist as items, i}
    <DisWords sort = {i} content ={items}/>
    {/each}
</div>
<style>
    #containSov{
        position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 4vh;
    border: 0;
    align-content: flex-start;
    }
</style>