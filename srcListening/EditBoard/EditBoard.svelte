<script>
  import { onMount } from "svelte";
  import { slide } from 'svelte/transition'
  import { editBoard, ongoingText } from "../store.js";
    onMount(()=>{
        document.getElementById('TextEdit').value = document.getElementById('textarea').value
    })
    function Finish(){
        $editBoard = false  
        $ongoingText = document.getElementById('TextEdit').value
       
        document.getElementById('textarea').value = document.getElementById('TextEdit').value
    }
</script>
<div id = 'containBlack'></div>
<div id = 'containerEdit' transition:slide={{duration:300}}>
    <textarea id = 'TextEdit' spellcheck="false"></textarea>
    <button id = 'finish' on:click = {Finish}>Done</button>
</div>
<style>
    textarea {
        position: absolute;
    padding: 3vh;
    resize: none;
    font-size: 2.5vh;
    font-family: monospace;
    top: 0;
    right: 0;
    left: 0;
    color: #535353;
    background-color: #eeeeee;
    bottom: 0;
 
}


#finish{
    position: absolute;
    height: 3vh;
    background-color: rgb(0, 0, 0);
    width: max-content;
    padding-inline: 2vh;
    margin-inline: 1vh;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 1vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    color: white;
    bottom: 1vh;
    right: 2vh;
    z-index: 1;
    }
    #finish:hover{
        background-color: #3b3c44;
    }

    #containBlack{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: black;
        opacity: 0.8;
        z-index: 1;
    }
    #containerEdit{
        position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 65vh;
    aspect-ratio: 16/9;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 2vh
    }
</style>