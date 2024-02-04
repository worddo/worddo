<script>
  import { imageList } from "../store";

  function Delete(num){
    imageList.update((value)=>{
        let prev = [...value]
        prev.splice(num,1)
        return prev
    })
  }

</script>
<div id = 'containPrev'>
    {#each $imageList as image, x}
        <div class = 'containMage'>
            <img src = {image} alt ='aimg'>
            <button class = 'deleteImg' on:click = {()=>{Delete(x)}}>remove</button>
        </div>
    {/each}
</div>

<style>
    #containPrev{
        position: absolute;
    left: 0vh;
    right: 0vh;
    bottom: 0vh;
    top: 0vh;
    display: flex;
    overflow: auto;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    }
   

    .containMage{
        position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    border: 0;
   
    }

    .deleteImg{
        position: absolute;
    right: 1vh;
    width: max-content;
    color: white;
    background-color: #1d1d1d;
    height: 2vh;
    top: 1vh;
    border: 0;
    border-radius: 0.5vh;
    font-size: 1.5vh;
    font-weight: bold;
    font-family: monospace;
    transition: 1s;
    z-index: 1000;
    }
    .deleteImg:hover{
        transition: 0.2s;
        scale: 1.1;
    }
    img{
        position: relative;
  
    bottom: 0;
    width: 100%;
    }

</style>