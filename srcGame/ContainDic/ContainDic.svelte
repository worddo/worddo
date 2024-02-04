<script>
  import { onMount } from 'svelte';
import {gameInputWord, nofi, resultCheckWord} from '../store'
  import DefiBoard from './DefiBoard.svelte';
  import FallBoard from './FallBoard.svelte';

    
</script>
<div id = 'diction'>
<div id = 'ContainDic'>
    <div id ='conTilte'>{$gameInputWord}</div>
    <div id ='conTainDefi'>
        {#if $resultCheckWord}
        <DefiBoard words = {$gameInputWord}/>
        {:else}
        <FallBoard/>
        {/if}
    </div>
</div>
</div>
<style>
        #diction{
            position: relative;
    background-color: #fefefe;
    width: 100%;
    border-radius: 2vh;
    flex-grow: 1;
    bottom: 10vh;
    transition:0.5s;
    }
    #diction:hover{
        transition: 0.2s;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    #ContainDic{
        display: flex;
    flex-direction: column;
    height: 100%;
    }

    #conTilte{
        width: 90%;
    padding-inline: 5%;
    padding-block: 2vh;
    /* top: 4vh; */
    position: relative;
    font-size: 6vh;
    font-weight: bold;
    font-family: monospace;
    word-wrap: break-word;
    /* flex-grow: 1; */
    height: max-content;
    }

    #conTainDefi{
        position: relative;
    /* bottom: 0; */
    width: 100%;
    flex-grow: 1;

    }
</style>