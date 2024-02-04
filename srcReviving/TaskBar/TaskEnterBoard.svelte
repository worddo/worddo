<script>
     import { AnsList, CusList, LisEnter, choice, resMean, resWord, reswholekey} from "../store";

function Add(){
 
  LisEnter.update(value=>{
      return [...value,`${(value.length+1)}`]
  })
  console.log($LisEnter)

  resMean.update(value=>{
      value.push('')
      return value
  })
 
  resWord.update(value=>{
      value.push('')
      return value
  })
}

function Remove(){
  LisEnter.update(value=>{ 
      value.pop()
      return value
  })
  resMean.update(value=>{
      value.pop()
      return value
  })
 
  resWord.update(value=>{
      value.pop()
      return value
  })
 
}

function next(){
    let uiWord = Array.from(document.getElementsByClassName('words'))
        let uiPart = Array.from(document.getElementsByClassName('parts'))
        let uiMean = Array.from(document.getElementsByClassName('means'))

        uiWord.forEach((element,i) => {
            uiWord[i] = element.value
        })
        uiPart.forEach((element,i) => {
            uiPart[i] = element.value
        })
        uiMean.forEach((element,i) => {
            uiMean[i] = element.value
        })

        $resWord = uiWord
   
        $resMean = uiMean
        
        
        $choice = 'choices'
        // reset Answer cuar customer 
        CusList.update(()=>{ return new Array($LisEnter.length).fill("")}) 
    
        //reset answer of chuong trinh de push khi add
        $AnsList = new Array($LisEnter.length) 
        $reswholekey = []
}
</script>
<button id ='add' on:click = {Add}>add</button>
<button id ='remove' on:click = {Remove}>remove</button>
<button id ='next' on:click = {next}>next</button>

<style>
    
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
    padding-inline: 1vh;
    margin-inline: 0.5vw;
    border-radius: 0.5vh;
    font-size: 2.2vh;
    font-family: monospace;
    font-weight: bold;
    transition: 0.2s ease-in-out;
    }

    button:hover{
        transition: 0.2s ease-in-out;
        background-color: #fefefe;
        color:#1d1d1d;
    }
</style>