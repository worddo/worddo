<script>
  import { onMount } from "svelte";
  import { TFlist, gameInputWord, listresEnter, nofi, onWhom, searchDicTF } from "../store";
    
    export let sort,content
    let backColor 
    onMount(()=>{
       
        console.log("ssdfsdsdsdsds",content)
    if (content == 'user'){
        let text = $listresEnter[sort]
        console.log(text,";;;;;k")
        text = text.split('')
        text = text[text.length-1]
        console.log(text)
        let link =`https://api.datamuse.com/words?sp=${text}*`
        fetch(link)
        .then(res=>res.json())
        .then(res =>{
            let ListWord = []
            res.map((value)=>{
                ListWord.push(value.word)
            })
            text = ListWord[Math.floor(Math.random() * (ListWord.length-1))]
           
        })
        setTimeout(()=>{
            let noi = ["Bring it on! My turn for some action.","Ready when you are, hit me with the next challenge.","Hand it over, I'm all in! Can't wait to take my shot.","My watch has come, let's see what's in store.","Eyes peeled, ears open, I'm primed and ready to go!","Up next! Can't wait to show my stuff.","Pass the baton, I'm ready to run with it.","Show time! Step aside, it's my moment to shine.","Gimme it, gimme it! I'm itching to get started.","On your mark, get set, let's do this! My turn to play."]
            $nofi = noi[ Math.floor(Math.random() * (noi.length-1))]
            $searchDicTF = false
        },5000)
        setTimeout(()=>{
            let noi = ["Finished.","Completed.","Concluded.","Achieved.","Accomplished.","Finalized.","Executed.","Fulfilled.","Resolved.","Ended."]
            $nofi = noi[ Math.floor(Math.random() * (noi.length-1))]
            $gameInputWord = text
          
            $searchDicTF = true
            console.log($TFlist)
            //ai thinking
            listresEnter.update(value=>{
                    value.push(text)
                    return value
                })
                TFlist.update(value=>{
                        value.push('ai')
                   
                    return value
                })
            
                $onWhom = 'ai'
                
        },8000)
    } else if (content == 'ai'){
        console.log("adadad")
        $onWhom = 'user'
        document.getElementById('textIn').value = $gameInputWord.split('').pop()
         
    }
    })
    
    if (content=='user'){
        backColor = '#ff6464'
    } else {
        backColor = '#139487'
    }
    
</script>

<div class = 'disword' style = {`background-color: ${backColor}`}>{$listresEnter[sort]}</div>


<style>
    .disword{
        width: max-content;
    padding-inline: 2vh;
    font-size: 2vh;
    border-radius: 1vh;
    padding-block: 1vh;
    height: max-content;
    font-weight: bold;
    font-family: monospace;
    color: white;
    margin: 0.5vh;
    }
</style>