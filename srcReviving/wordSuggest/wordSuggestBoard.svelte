<script>
  import { endInput, listwordSug, startInput, formchosedNum } from "../store";
    function UpdateWord(sen){
       
        let value = document.getElementById(`inputForm${$formchosedNum}`).value 
        value = value.slice(0,$startInput)+sen+value.slice($endInput,value.length-1)
        console.log(value)
        document.getElementById(`inputForm${$formchosedNum}`).value = value
        document.getElementById(`inputForm${$formchosedNum}`).focus()
    }
</script>
<div id = 'wordSuggestBoard'>
    {#each $listwordSug as words}
    <button class = 'wordsug' on:click = {()=>{UpdateWord(words)}}>{words}</button>
    {/each}
</div>

<style>
    #wordSuggestBoard {
        position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    }
    button{
        position: relative;
    background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #fefefe;
    transition: 0.1s;
    height: 3.5vh;
    line-height: 3.5vh;
    width: max-content;
    padding-inline: 2vh;
    padding-block: 0.3vh;
    margin-inline: 0.2vw;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
   
    }

    button:hover{
        border-radius: 0.5vh;
        border:0;
        background-color: #fefefe;
        color:#1d1d1d;
    }
</style>