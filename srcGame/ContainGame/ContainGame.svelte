<script>
  import { onMount } from "svelte";
  import ContainDic from "../ContainDic/ContainDic.svelte";
  import SolvingGame from "../SolvingGame.svelte/SolvingGame.svelte";
  import WFboard from "../WhoFirst/WFboard.svelte";
  import { nofi, TFlist, changingUserAi, gameInputWord, listresEnter, resultCheckWord, searchDicTF, stepGame, onWhom } from "../store";
    
  onMount(()=>{

    onWhom.subscribe((value)=>{
        if (value == 'ai'){
            console.log("close")
            document.getElementById('done').disabled = true
            document.getElementById('textIn').disabled = true
            document.getElementById('done').style.opacity = '0.5'
            document.getElementById('textIn').style.opacity = '0.5'
        } else {
            console.log("open")
         
            document.getElementById('done').disabled = false
            document.getElementById('textIn').disabled = false
            document.getElementById('done').style.opacity = '1'
            document.getElementById('textIn').style.opacity = '1'
        }
    })
  })
   
  
  function Done(){
        $onWhom = 'ai'
        $searchDicTF = false
        $gameInputWord = document.getElementById('textIn').value
        document.getElementById('textIn').value = ''
        let noi = ["Verifying what you've said.","Confirming your statement.","Validating your words.","Double-checking what you've mentioned.","Ensuring the accuracy of your words.","Investigating your claim.","Fact-checking your statement.","Cross-referencing your words.","Examining what you've said.","Making sure of your word."]
     
        $nofi = noi[ Math.floor(Math.random() * (noi.length-1))]
        var link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ `${$gameInputWord}`
        fetch(link)
        .then(res=> {
            
            if (res.ok){
                //nofi
                let noi = ["Impressive choice of words, my friend.","You've got a way with words, my friend.","Well said, my friend.","Great expression, buddy.","You've articulated that well, mate.","Nice phrasing, my friend.","You've chosen your words well, buddy.","That's a commendable choice of words, my friend.","You've conveyed that nicely, mate.","Well put, my friend."]
     
                $nofi = noi[ Math.floor(Math.random() * (noi.length-1))]
               
                //nofi
                $resultCheckWord = true
                listresEnter.update(value=>{
                    value.push($gameInputWord)
                    return value
                })
                TFlist.update(value=>{
                    if (value[value.length-1]=='user'){
                        value.push('ai')
                    } else {
                        value.push('user')
                    }
                    return value
                })
                $changingUserAi = !$changingUserAi
                console.log("change hewre")
            } else {
                $resultCheckWord = false
                $onWhom = 'user'
            }
            console.log($TFlist)
            $searchDicTF = true
    }    )

}
    
</script>
<div id = 'GameContain'>
    <div id = 'containContent'>
       
        <div id = 'containDisplay'>
            {#if $stepGame == 'choice'}
                <WFboard/>
            {:else if $stepGame == 'solving'}
                <SolvingGame/>
            {/if}
        </div>
       
    </div>
    <div id = 'containStatus'>
        <div id = 'status'>{$nofi}</div> 
       
            {#if $searchDicTF}
            <ContainDic/>
            {/if}

        <input type = 'text' id ='textIn' autocomplete="off">
        <button id ='done' on:click = {Done}>done</button>
    </div>
</div>


<style>
    #done{
        position: absolute;
    width: max-content;
    background-color: transparent;
    color: white;
    border: 0.1vh solid #535353;
    font-size: 2vh;
    font-weight: bold;
    font-family: monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vh;
    z-index: 1;
    padding-inline: 3vh;
    border-radius: 1.5vh;
    bottom: 2vh;
    right: 2vh;
    }
    #done:hover{
        transition:0.2s;
        border:0;
        background-color: #eeeeee;
        color:#1d1d1d;
    }
    #GameContain{
        top: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #2a2a2a;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    }
    #containContent{
        position: relative;
    top: 3vh;
    height: 94vh;
    width: 72vw;
    margin-right: 7vh;
    left: 3vh;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    transition: 0.5s;
    }
    #containContent:hover{
        transition: 0.2s;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    #containDisplay{
        position: relative;
    width: 100%;
    background-color: transparent;
    border: 0.1vh solid #535353;
    border-radius: 2vh;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    bottom: 0;
    }
    #textIn{
        position: absolute;
    left: 0;
    background-color: transparent;
    border: 0.1vh solid #535353;
    height: 4vh;
    bottom: 0;
    border-radius: 2vh;
    padding: 2vh;
    font-size: 3vh;
    line-height: 10vh;
    font-family: monospace;
    font-weight: bold;
    margin-top: 2vh;
    right: 0;
    color:#fefefe;
    transition: 0.5s;
    }
    #textIn:hover{
        transition: 0.2s;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    #containStatus{
        position: relative;
    top: 2vh;
    height: 95vh;
    right: 2vh;
    margin-left: 1vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 30vw;
    }
    #status{
        position: relative;
    width: 96%;
    top: 3vh;
    height: max-content;
    border-radius: 2vh;
    padding: 2%;
    padding-block: 1.5vh;
    font-size: 3vh;
    font-family: monospace;
    color: white;
    word-break: break-word;
    margin-bottom: 21vh;
    }

</style>