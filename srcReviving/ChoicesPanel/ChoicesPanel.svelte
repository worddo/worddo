<script>
  import { AnsList, LisEnter, MixRes, choice, choiceOpt } from "../store";
  import { slide} from 'svelte/transition'

function Chars(){
    $choice = 'chars'
    $choiceOpt = 'chars'
}
function Words(){
    $choice = 'words'
    $choiceOpt = 'words'
}



function Means(){
    $choice = 'means'
    $choiceOpt = 'means'
}

function Mix(){
    $choice = 'mix'
    $choiceOpt = 'mix'
    $MixRes = []
    MixRes.update((value)=>{
        for (let i = 0; i<$LisEnter.length;i++){
            let r = Math.floor(Math.random() * (3))
    
            value.push(r)
        }
        console.log(value)
        return value
    })
    $AnsList=[]
}
</script>

<div id ='choicespanel' transition:slide={{duration:500}}>
    <div id = 'containeChoice'>
    <button class = 'choices' on:click = {Chars}>chars</button>
    <button class = 'choices' on:click = {Words}>words/clauses</button>
    <button class = 'choices' on:click = {Means}>meanings</button>
    <button class = 'choices' on:click = {Mix}>mix</button>
    </div>
    
</div>


<style>

    #containeChoice{
        position: relative;
    width: max-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    background-color: #1d1d1d;
    border-radius: 2.2vh;
    z-index: 1;
    }
    #choicespanel{
        position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    }

    .choices{
        height: 5vh;
    width: max-content;
    padding-inline:2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vh;
    font-family: monospace;
    font-weight: bold;
    border-radius: 1.5vh;
    margin: 1vh;
    background-color: transparent;
    color: #eeeeee;
   transition:0.5s;
    }

    .choices:hover{
        background-color: #eeeeee;
        color:#333333;
    }
</style>