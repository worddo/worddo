<script>
	import Taskbar from './TaskBar/Taskbar.svelte'
	import { dictionaryDS } from './store';
	import Dictionary from './Dictionary/Dictionary.svelte'
  import MainArea from './MainArea/MainArea.svelte';
  
</script>

<div id = 'taskbar'> 
    <img src = "../images/withoutunderwhite.svg" alt = "logo" id ="logo">
        <Taskbar/>
    
</div>
<MainArea/>

{#if $dictionaryDS}
    <Dictionary/> 
{/if} 
<style>
	 #taskbar{
        position: absolute;
    width: 100%;
    background-color: #1d1d1d;
    height: 5vh;
    display: flex;
    align-items: center;
    top: 0;
    }

    img {
        height: 7vh;
    /* bottom: 0; */
        position: absolute;
        top: 50%;
        transform: translate(0, -40%);
    }
</style>