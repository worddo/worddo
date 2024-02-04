<script>
    import { onTab, step, taskbar, typesFile } from '../store.js'
    import { scale } from 'svelte/transition'
    function Compare(types){
        // Xem thử chọn text,pdf hay images
        $step[$onTab-1] = "enterName"
        $typesFile[$onTab-1] = types
        
        console.log($step[$onTab-1])
    }
</script>

<div class = 'container'>
<button in:scale={{duration:500}} id = 'text' on:click = {()=>{Compare("text")}}>text</button>

<button in:scale={{duration:500}} id = 'pdf' on:click = {()=>{Compare("pdf")}}>pdf</button>
    
<button in:scale={{duration:500}} id = 'image' on:click = {()=>{Compare("image")}}>image</button>

</div>

<style>
    .container{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 71vh;
    transform: translate(-50%,-50%);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    }

    button{
        position: relative;
    width: 15vh;
    height: 6vh;
    background-color: transparent;
    border-radius: 1vh;
    border: 0;
    font-size: 2.5vh;
    font-weight: bold;
    font-family: monospace;
    margin: 1vh;
    color: #1d1d1d;
    }

    button:hover{
        background-color: #1d1d1d;
        color:#fefefe;
    }

    

</style>