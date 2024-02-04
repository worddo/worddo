<script>
    import { onTab, step, tab, typesFile, preventReloadFile, taskbar } from "../store.js";
    let dataName =""
    import { slide } from 'svelte/transition'
    function updateNameFile(){
       
        $tab[$onTab-1] = dataName
        $taskbar = $typesFile[$onTab-1]
      
        if ($typesFile[$onTab-1] == "text"){
             $step[$onTab-1] = "RunText" //hidden the input name
            
        } else if ($typesFile[$onTab-1] == "pdf"){
            $step[$onTab-1] = "RunPDF"// RUN PDF VIEWER
            
        } else if ($typesFile[$onTab-1] == "image"){
            $step[$onTab-1] = "RunImage"// RUN PDF VIEWER
            
        }
        }
    
</script>

<div id = 'container' in:slide={{duration:1000}}>
    <input placeholder="Enter the name's tab" bind:value={dataName} spellcheck="false">
    <button on:click = {()=>{$step[$onTab-1] = "selectfile"}} id = 'cancel'>cancel</button>
    <button on:click = {()=>{updateNameFile()}} id ='next'>next</button>
</div>

<style>
    #container{
        position: absolute;
    top: 50%;
    left: 50%;
    width: 60vw;
    height: 25vh;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #a4a4ac00;
    border-radius: 2vh;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    }

    input{
        position: relative;
    width: 100%;
    top: 28%;
    height: 5vh;
    border: 0;
    border-radius: 1vh;
    padding-inline: 1vh;
    font-family: monospace;
    font-size: 2vh;
    font-weight: bolder;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

    input:focus{
        outline: none;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        transition: 0.5s;
    }

    #cancel{
        position: absolute;
    right: 9vh;
    top: 13vh;
    background-color: transparent;
    border-radius: 1vh;
    border: 0;
    height: 4vh;
    font-size: 2vh;
    font-family: monospace;
    aspect-ratio: 16/9;
    }

    #next{
        position: absolute;
    right: 0;
    top: 13vh;
    background-color: transparent;
    border-radius: 1vh;
    border: 0;
    height: 4vh;
    font-size: 2vh;
    font-family: monospace;
    aspect-ratio: 16/9;
    }

    #next:hover{
        background-color: #1d1d1d;
        color:#fefefe;
    }

    #cancel:hover{
        background-color: #1d1d1d;
        color:#fefefe;
    }
</style>