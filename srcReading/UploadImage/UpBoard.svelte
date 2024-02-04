<script>
  import {  DisplayImageList, imageList, imageListTab, imageTF, onTabImage } from "../store";
  import Drag from "./Drag.svelte";
  import Preview from "./Preview.svelte";

  import { slide, blur } from 'svelte/transition'
    function OkImage(){
        imageListTab.update((value) => {
    let prev = [...value];
    console.log(prev,$onTabImage,"ads")
    prev[$onTabImage - 1] = prev[$onTabImage - 1].concat($imageList);
    return prev;
  });

  $imageTF = false;
    }
</script>


<div id = 'containUpload' transition:slide={{duration:500}}>
    
    <div id = 'containUpMain' transition:blur={{duration:500}}>
        <Drag/>
    </div>
    <div id = 'containGalary' transition:blur={{duration:500}}>
        <Preview/>
    </div>
    <button id = 'exit' on:click = {()=>{$imageTF=false}}>out</button>
    <button id = 'okeImgage' on:click ={OkImage}>done</button>
</div>
    
<div id = 'blackground'></div>
<style>

    #blackground{
        position: fixed;
        top:0;
        left: 0;
        right:0;
        bottom:0;
        background-color: #535353;
        opacity: 0.8;
        z-index: 6;
    }
#containUpload{
    position: fixed;
    height: 50vh;
    background-color: #1d1d1d;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    aspect-ratio: 16/9;
    border-radius: 2vh;
    border: 0;
    }




#containUpMain{
    position: absolute;
    left: 2vh;
    background-color: transparent;
    right: 52vh;
    top: 3vh;
    bottom: 2vh;
    border: 0;
}
#containGalary{
    position: absolute;
    right: 4vh;
    top: 5vh;
    bottom: 4vh;
    left: 39vh;
    background-color: #535353;
    border-radius: 1vh;
    overflow: hidden;
    border: 0;
}

#exit{
    position: absolute;
    right: 11vh;
    bottom: -4vh;
    background-color: #1d1d1d;
    border-radius: 1vh;
    border: 0;
    height: max-content;
    width: max-content;
    padding: 0.5vh;
    padding-inline: 3vh;
    color: #fefefe;
    font-size: 2vh;
    font-weight: bold;
    font-family: monospace;
}

#okeImgage{
    position: absolute;
    right: 0;
    bottom: -4vh;
    background-color: #1d1d1d;
    border-radius: 1vh;
    border: 0;
    height: max-content;
    width: max-content;
    padding: 0.5vh;
    padding-inline: 3vh;
    color: #fefefe;
    font-size: 2vh;
    font-weight: bold;
    font-family: monospace;
    
  
   

}
#okeImgage:hover{
    background-color: #fefefe;
    color:#1d1d1d;
}

#exit:hover{
    background-color: #fefefe;
    color:#1d1d1d;

}

</style>