<script>
  import { finalanswerTF, result, testAns } from "../store";
  import AnswerForm from "./AnswerForm.svelte";

    function Check(){
        testAns.update(value=>{
                return []
            })
        var ui = document.getElementsByClassName('answer');
        Array.from(ui).forEach(test);

    function test(element, index) {
        console.log(element.value)
        if ($result[index] == element.value){
            testAns.update(value=>{
                return [...value,"#08f26e"]
            })
        }
        else{
            testAns.update(value=>{
                return [...value,"#ff0033"]
            })
        }
      
    }
    $finalanswerTF = true
    console.log($testAns)
    }
</script>
<div id = 'answersheet'>
    {#each $result as res,i}
        
       <AnswerForm content = {res} sort = {i+1}/>
       {#if $result.length-1==i}
        <button id = 'check' on:click = {Check}>check</button>
       {/if}
    {/each}
    
</div>

<style>
    #check{
        position: relative;
    height: max-content;
    background-color: transparent;
    width: max-content;
    padding: 0.5vh;
    padding-inline: 3vh;
   
    display: flex;
    border: 0.1vh solid #535353;
    align-items: center;
    border-radius: 1vh;
    font-size: 2.5vh;
    font-family: monospace;
    margin: 2vh;
    font-weight: bold;
    color: #eeeeee;
    bottom: 1vh;
    right: 0;
    transition:1s;
}
    #check:hover{
        background-color: #eeeeee;
        color:#1d1d1d;
        border:0;
        padding-inline:4vh;
        transition:1s;
    }
    

    #answersheet{
        position: relative;
    background-color: transparent;
    display: flex;
    border: 0.1vh solid #535353;
    flex-grow: 1;
    flex-wrap: nowrap;
    padding-top: 1vh;
    padding-bottom: 0;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 2vh;
    transition: 0.5s;
    overflow-y: auto;
    overflow-x: hidden;
    align-items: center;
    cursor: pointer;
    }
    #answersheet:hover{
        transition: 0.2s;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    
    }
    #answersheet::-webkit-scrollbar {
        width: 1vh;
    border-radius: 0.5vh;
    background-color: transparent;
}

#answersheet::-webkit-scrollbar-thumb {
    background-color: #eeeeee;
    border-radius: 1vh;
    cursor: pointer;
}
</style>