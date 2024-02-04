<script>
    import { stepDS , enterText } from "../store.js";
    import { onMount  } from "svelte"; 
    let zIndex = 0
    let loaded //chờ loadd thay đổi thì update
        stepDS.subscribe((value)=>{
            if (value == 'coA'){
                zIndex = 1
            } else zIndex = 0
        })
        let coAList
        onMount(()=>{
            loaded = false
            let huptext = $enterText
        var urlcoA = "https://api.datamuse.com/words?rel_jjb="+huptext
      
      fetch(urlcoA)
      .then(res => res.json())
      .then( result => {
        coAList = []
        result.map(createcoA)
        
        loaded =true
        function createcoA(coA){
        
          coAList.push(coA.word)
            
    
          }
        
        })
    }
        )
    </script>
    <div class = 'containercoA' style = {`z-index:${zIndex};`} >
        {#if loaded==true}
        {#each coAList as coA}
        <div class="coAWord">{coA+" "+$enterText}</div>
        {/each}
        {/if}
    </div>
    
    
    
    <style>
          .containercoA{
            position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #1c1c1c;
    top: 6vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow: auto;
    flex-direction: row;
    align-content: flex-start;
        }
    .containercoA::-webkit-scrollbar {
  width: 0;
}
        .coAWord{
            position: relative;
    width: max-content;
    height: 5vh;
    padding-inline: 3vh;
    background-color: #eeeeee;
    color: #535353;
    margin: 1.5vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border: 0;
    border-radius: 1.5vh;
    font-size: 3vh;
    line-height: 5vh;
    font-weight: bold;
    font-family: monospace;
        }

        .coAWord:hover{
        background-color: #fefefe;
        color: #1d1d1d;
        scale: 1.1;
        }
    </style>