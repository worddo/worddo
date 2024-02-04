<script>
  import { onMount } from "svelte";
  import { choseText, coordinateMouse, selectedText, selectedTextForQuickTask } from "../store.js";
  import { slide } from 'svelte/transition'
  onMount(()=>{
        let container = document.getElementById('containQuickTask')
        if (($coordinateMouse[0]+container.offsetWidth) < window.innerWidth){
            container.style.left = $coordinateMouse[0] +'px'
        } else {
            container.style.left = $coordinateMouse[0]-container.offsetWidth +'px'
        }
        if (($coordinateMouse[1]+container.offsetHeight) < window.innerHeight){
            container.style.top = $coordinateMouse[1] +'px'
        } else {
            container.style.top = $coordinateMouse[1]-container.offsetHeight +'px'
        }

    
    })
    function RUN(){
        
        $selectedTextForQuickTask = false
      
        var link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ $choseText

        fetch(link)
        .then(res=>{
            if (res.ok){
                $selectedText = 'available'
               
            } else {
                $selectedText = 'notfound'
            }
        })
    }

    function savingown(){
        $selectedText = 'owning'
        $selectedTextForQuickTask = false
    }

    function HightLight(color){
        document.execCommand('backColor', false, color);
   
    }
</script>

<div id = 'containQuickTask' transition:slide={{duration:300}}>
    <button id = 'translate' class = 'buttask' on:click={RUN}>Find</button>
    <button id = 'saveown' class = 'buttask' on:click = {savingown}>Own-Saving</button>
    <div id ='containQuickHighlight'>
        <button class = 'quickHighlight' id = 'color1' on:click= {()=>{HightLight('#ff6565')}}></button>
        <button class = 'quickHighlight' id = 'color2' on:click= {()=>{HightLight('#91e0ee')}}></button>
        <button class = 'quickHighlight' id = 'color3' on:click= {()=>{HightLight('#ffe16c')}}></button>
        <button class = 'quickHighlight' id = 'color4' on:click= {()=>{HightLight('#179487')}}></button>
        <button class = 'quickHighlight' id = 'color5' on:click= {()=>{HightLight('#fe5d8c')}}></button>
        <button class = 'quickHighlight' id = 'Nocolor' on:click= {()=>{HightLight('#00000000')}}></button>
    </div>
</div>


<style>
    #containQuickTask{
        width: max-content;
    height: 4vh;
    background-color: #1d1d1d;
    position: fixed;
    z-index: 2;
    border-radius: 1vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding-inline: 0.5vh;
    }

    .buttask{
        position: relative;
    width: max-content;
    border: 0;
    border-radius: 0.8vh;
    height: 3vh;
    color: white;
    background-color: transparent;
    margin-inline-end: 0.5vh;
    }

    .buttask:hover{
        background-color:#fefefe;
        color:#1d1d1d;
    }

    #containQuickHighlight{
        position: relative;
    width: max-content;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    }

    .quickHighlight{
        height: 3vh;
    aspect-ratio: 1/1;
    border-radius: 0.8vh;
    border: 0;
    margin-inline-end: 0.5vh;
    transition: 0.1s ease-in-out;
    
    }

    .quickHighlight:hover{
        height:2.5vh;
        
    }
    #color1{
        background-color: #ff6565;
    }
    #color2{
        background-color: #91e0ee;
    }
    #color3{
        background-color: #ffe16c;
    }
    #color4{
        background-color: #179487;
    }
    #color5{
        background-color: #fe5d8c;
    }
    #Nocolor{
        background-color: white;
    margin-inline-end: 0;
    }
</style>