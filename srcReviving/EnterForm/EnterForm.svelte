<script>
  import { onMount } from "svelte";
  import { endInput, formchosedNum, listwordSug, resMean, resWord, startInput, suggestTF, suggestUpdate } from "../store";
  import { wordlist } from '../wordslist'
  import { slide} from 'svelte/transition'
     export let sort
     onMount(()=>{

    document.getElementsByClassName("words")[sort].value = $resWord[sort]
  
    document.getElementsByClassName("means")[sort].value = $resMean[sort]
    })
   
    function TestInput(event){
       
    let input = event.target;
    let cursorPosition = input.selectionStart;
    let text = input.value;
    let startIndex = cursorPosition;
    let endIndex = cursorPosition;

    // Find the start of the word
    while (startIndex > 0 && text[startIndex - 1] !== ' ') {
      startIndex--;
    }

    // Find the end of the word
    while (endIndex < text.length && text[endIndex] !== ' ') {
      endIndex++;
    }
    $startInput = startIndex
    $endInput = endIndex
    let fiword = text.substring(startIndex, endIndex);
    if (fiword[0]!=" "){
   let finalList = wordlist.filter(word => word.startsWith(fiword)).slice(0, 5)
   $listwordSug = finalList
   $suggestTF = true
   $suggestUpdate=!$suggestUpdate
   console.log(finalList)
}
/*


let matches = findBestMatch(word, wordlist);
console.log(matches)
let topMatches = matches.ratings
  .sort((a, b) => b.rating - a.rating) // Sort the matches by rating in descending order
  .slice(0, 10) // Take the top 10 matches

let similarWords = topMatches.map(match => match.target);

console.log(similarWords);
  */
    }
   
    function ClickChose(){
        $suggestTF = true
        $formchosedNum = sort
        $listwordSug = []
    }

    function Blur(){
        setTimeout(()=>{$suggestTF = false},100)
    }
</script>

<div class = 'containTitleName' transition:slide={{duration:500}}>
<div class = 'tagname'>{sort+1}</div>
<input type = 'text' class = 'words' on:input={()=>{TestInput(event)}} on:click ={ClickChose} id = {`inputForm${sort}`} on:blur ={Blur} spellcheck="false" lang="en" autocomplete="off">
<input type = 'text' class = 'means'>
</div>
<style>
  
    .tagname{
        position: relative;
    background-color: #1d1d1d;
    height: 4.5vh;
    border-radius: 1vh;
    margin-block: 1vh;
    color: #fefefe;
    text-align: center;
    width: 5.5vh;
    font-weight:bold;
    font-family: monospace;
    font-size: 2.5vh;
    line-height: 4.5vh;
    margin-right: 1vh;

    
    }
    .words{
        background-color: transparent;
    height: 4.5vh;
    border-radius: 1vh;
    margin-block: 1vh;
    color: #1d1d1d;
    width: 45%;
    font-family: monospace;
    font-size: 2.5vh;
    padding: 0;
    padding-inline: 1%;
   
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    transition: 0.2s ease-in-out;
    }

   

    .means{
        background-color: transparent;
    height: 4.5vh;
    border-radius: 1vh;
    margin-block: 1vh;
    color: #1d1d1d;
    width: 45%;
    font-family: monospace;
    font-size: 2.5vh;
    padding: 0;
    padding-inline: 1%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    transition: 0.2s ease-in-out;
    }
    .words:hover{
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
       
    }
    .means:hover{
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        
    }
    .words:focus{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        transition: 0.2s ease-in-out;
    }
    .means:focus{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        transition: 0.2s ease-in-out;
    }
    .containTitleName{
        position: relative;
    display: flex;
    width: 93%;
    bottom: 2vh;
    height: fit-content;
    margin-bottom: 1vh;
    justify-content: space-between;
    }
</style>