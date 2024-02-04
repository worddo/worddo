<script>
       
    import {  tab,  isOning, nameTF, onTab} from "../store.js"
  
    import Tab from "../Tab/Tab.svelte";

    import New from "../Tab/New.svelte";

    import { slide } from 'svelte/transition'

</script>

<button id ='backgen' on:click ={()=>{$nameTF = true}}></button>
<div id="num" in:slide={{duration:500}} out:slide = {{duration:200}}>
    
    <New/>
    {#each $tab as item,i}
    {#if $isOning[i]} 
        <Tab numtab = {item} pagenum = {i+1}></Tab>
       
     {/if} 
    {/each}

    
</div>



<style>
#backgen{
    border: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 98;
}

#num{
    background-color: #1c1c1c;
    aspect-ratio: 4/5;
    width: 45vh;
    position: fixed;
    bottom: 1vh;
    display: flex;
    flex-direction: column;
    left: 1vh;
    border-radius: 1vh;
    align-items: center;
    overflow: hidden;
    overflow-y: auto;
    padding: 1vh;
    padding-top: 4vh;
    z-index: 99;
}
</style>