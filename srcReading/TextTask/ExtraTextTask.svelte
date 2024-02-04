<script>
    import { moreless,dictionaryDS, isConvertingTess, convertedTextTess, noteTF } from "../store.js"
    import { scale } from 'svelte/transition'
    function Right(){
        document.execCommand("justifyRight",false,null)
    }

    function Left(){
        document.execCommand("justifyLeft",false,null)
    }

    function Center(){
        document.execCommand("justifyCenter",false,null)
    }

    function Full(){
        document.execCommand("justifyFull",false,null)
    }

    function Dictest(){
        $dictionaryDS =!$dictionaryDS
        if ($dictionaryDS == true){
            $isConvertingTess = false;
            $convertedTextTess =''
        }
    }

</script>
<div class = "group3" in:scale={{duration:500}}>
    <button id = "left" on:click ={Left}>left</button>
    <button id = "center" on:click ={Center}>center</button>
    <button id = "right" on:click ={Right}>right</button>
    <button id = "justify" on:click ={Full}>justify</button>
 
    </div>

<div class = "container" in:scale={{duration:1000}}>

<button id = 'dic' on:click ={Dictest} class = 'extrabut'>dictionary</button>
<button id = 'return' on:click = {()=>{$moreless = "more"}} class = 'extrabut'>return</button>
</div>

<style>


    button:hover{
        background-color: #fefefe;
        color:#1d1d1d;
        padding-block: 0.3vh;
    }

     .container{
        position: absolute;
        right: 0;
        height: 2vh;
        width: 94%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    
    }

    button{
        background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #fefefe;
    transition: 0.1s;
    width: max-content;
        display: flex;
    align-items: center;
  
        border-radius: 0.5vh;
        font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    padding-inline:1vh;
    margin-inline:1vh;
 
    }

  

    .group3{
        position: relative;
    display: flex;
    left: 11vh;
    z-index: 1;
    }
</style>

