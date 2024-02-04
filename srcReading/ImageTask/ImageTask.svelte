<script>
    import PdFtask from "../PDFviewer/PDFtask.svelte";
import {  imageList, imageTF } from "../store.js";

    function Change(){
        $imageTF = true
        $imageList = []
    }
</script>

<div class = 'container'>

<button id = 'uploadBoard' on:click={Change}>add images</button>
</div>
<PdFtask/> 
<style>
.container{
    position: absolute;
    height: 2vh;
    width: max-content;
    left: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    }



    button{
        background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    margin-left:1vh;
    color: #fefefe;
    transition: 0.1s;
    height: max-content;
    display: flex;
    align-items: center;
        width: max-content;
    padding-inline: 1vh;
        margin-inline: 0.5vw;
        border-radius: 0.5vh;
      
        font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    }

    button:hover{
        padding-block: 0.3vh;
        background-color: #fefefe;
        color:#1d1d1d;
    }
</style>