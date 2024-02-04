<script>
  import { onMount } from "svelte";
  import { AnsList, CusList, resMean, reswholekey } from "../store";
  export let words,means,sort
  let finalresult
    onMount(()=>{
        
//algorith for pick words
    //answer
    AnsList.update((value)=>{
        return [...value,means]
    })

    let r = document.createElement('input')
    r.style.cssText = `    background-color: rgb(238, 238, 238);
    width: 50%;
    border-radius: 1vh;
    font-size: 6vh;
    font-weight: bold;
    padding: 1vh;
    color:#333333;
    text-align: center;`
    r.id = 'inputMeans'+`${sort}`
    r.maxLenght = means.length
    r.setAttribute('autocomplete','off')
    r.setAttribute('spellcheck','false')
    //finalresult = `${words} (${parts}) ${r.outerHTML}`
   
   // document.getElementById("QuesMean"+`${sort}`).innerHTML = finalresult
    
   document.getElementById('furword'+`${sort}`).innerHTML = words

    document.getElementById('furmean'+`${sort}`).innerHTML = r.outerHTML
  

    }


    
   
    )    
    
</script>
<div class = 'containMeansBoard'>
    <div class = 'titleQues' id = {"QuesMean"+`${sort}`}>
        <div class = 'containfuture' id = {'furword'+`${sort}`}></div>

        <div class = 'containfuture' id = {'furmean'+`${sort}`}></div>
    </div>

</div>

<style>
.containfuture{
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    line-height: 8vh;
    line-break: auto;
    margin: 1vh;
    font-size: 6vh;
    word-wrap: break-word;
    white-space: pre-line;
    justify-content: center;
    text-align: center;
    }
    .containMeansBoard{
        position: relative;
    width: 100vw;
    height: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    }

    .titleQues{
        position: absolute;
    top: 50%;
    transform:translate(0,-50%);
    width: 90%;
    background-color: transparent;
    font-size: 6vh;
    font-family: monospace;
    font-weight: bold;
    display: flex;
    line-break: auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    white-space: pre;
}
    


 
</style>