<script>
    import { stepDS , enterText } from "../store.js";
    import { onMount  } from "svelte"; 
    let zIndex = 0
    let loaded //chờ loadd thay đổi thì update
        stepDS.subscribe((value)=>{
            if (value == 'coN'){
                zIndex = 1
            } else zIndex = 0
        })
        let coNList
        onMount(()=>{
            loaded = false
            let huptext = $enterText
        var urlcoN = "https://api.datamuse.com/words?rel_jja="+huptext
      
      fetch(urlcoN)
      .then(res => res.json())
      .then( result => {
        coNList = []
        result.map(createcoN)
        
        loaded =true
        function createcoN(coN){
        
          coNList.push(coN.word)
            
    
          }
        
        })
    }
        )
    </script>
    <div class = 'containercoN' style = {`z-index:${zIndex};`} >
        {#if loaded==true}
        {#each coNList as coN}
        <div class="coNWord">{$enterText+ " "+coN}</div>
        {/each}
        {/if}
    </div>
    
    
    
    <style>
            .containercoN{
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
    .containercoN::-webkit-scrollbar {
  width: 0;
}
        .coNWord{
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

        .coNWord:hover{
        background-color: #fefefe;
        color: #1d1d1d;
        scale: 1.1;
        }
    </style>