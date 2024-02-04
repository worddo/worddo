<script>
  import { onMount } from 'svelte';
import { stepDS } from '../store.js'
onMount(()=>{
    document.getElementsByClassName('typeDS')[0].style.backgroundColor = '#fefefe'
        document.getElementsByClassName('typeDS')[0].style.color = '#1d1d1d'
})
function Ref(choice,k){
    if (choice == 'defi'){
        $stepDS = 'defi'
       
    } else 
    if (choice == 'syn'){
        $stepDS = 'syn'
} else if (choice == 'ant'){
    $stepDS = 'ant'
} else if (choice == 'coA'){
    $stepDS = 'coA'
} else if (choice == 'coN'){
    $stepDS = 'coN'
}
for (let i = 0;i<=4;i++){
    if (i+1 == k){
        document.getElementsByClassName('typeDS')[i].style.backgroundColor = '#fefefe'
        document.getElementsByClassName('typeDS')[i].style.color = '#1d1d1d'
    } else {
        document.getElementsByClassName('typeDS')[i].style.backgroundColor = 'transparent'
        document.getElementsByClassName('typeDS')[i].style.color = '#fefefe'
    }
}
        
}
</script>

<div id = 'containerTypeDS'>
    <button class = 'typeDS' on:click={()=>{Ref('defi',1)}}>defi</button>
    <button class = 'typeDS' on:click={()=>{Ref('syn',2)}}>syn</button>
    <button class = 'typeDS' on:click={()=>{Ref('ant',3)}}>ant</button>
    <button class = 'typeDS' on:click={()=>{Ref('coA',4)}}>adj</button>
    <button class = 'typeDS' on:click={()=>{Ref('coN',5)}}>noun</button>
    
</div>

<style>

#containerTypeDS{
    position: absolute;
    top: 2vh;
    width: 100%;
    height: 4vh;
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;

    }

    .typeDS:hover{
        background-color: #fefefe;
        color:#1d1d1d;
    }

    .typeDS{
        position: relative;
    width: 8vh;
    height: 2.5vh;
    background-color: transparent;
    border: 0;
    border-radius: 0.6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 0.2vh;
    font-size: 2vh;
    font-weight: bold;
    color: #fefefe;
    font-family: monospace;
    }
</style>