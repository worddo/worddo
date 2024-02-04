<script>
    import { choice, dictionaryDS, suggestTF, suggestUpdate } from "../store.js"
  import WordSuggestBoard from "../wordSuggest/wordSuggestBoard.svelte";
  import TaskChoice from "./TaskChoice.svelte";
  import TaskEnterBoard from "./TaskEnterBoard.svelte";
    import TaskResult from "./TaskResult.svelte"





   


     function Dictest(){
        $dictionaryDS = true
    }
</script>


  

    <div id = "containerExtra">
     
       <div id = 'containsuggest'>
            
            {#if $suggestTF}
                {#key $suggestUpdate}
                    <WordSuggestBoard/>
                {/key}
            {/if}
       </div>
       <div id = 'containgesture'> 
        {#if $choice == 'enter'}
        <TaskEnterBoard/>
        {:else if $choice == 'choices'}
        <TaskChoice/>
        {:else}
        <TaskResult/>
        {/if}
        <button id = 'dic' on:click ={Dictest} class = 'extrabut'>dictionary</button>
    </div>
        
       
   
    

</div>
    

<style>
#containsuggest{
    position: relative;
    flex-grow: 1;
    height: 100%;
}
    #containgesture{
        position: relative;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    width: max-content;
    }


    button{
        position: relative;
    background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #fefefe;
    transition: 0.1s;
    height: 3vh;
    line-height: 3vh;
    width: max-content;
    padding-inline: 2vh;
    margin-inline: 0.5vw;
    font-size: 2.2vh;
    font-family: monospace;
    font-weight: bold;
    border-left: 0.1vh solid #535353;
    transition: 0.2s ease-in-out;
    }

    button:hover{
        transition: 0.2s ease-in-out;
       border-radius: 0.5vh;
        background-color: #fefefe;
        color:#1d1d1d;
    }

    #containerExtra{
        position: absolute;
    display: flex;
    align-items: center;
    right: 0;
    left: 12vh;
    height: 100%;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    }

 
   

 




   


   

    
</style>