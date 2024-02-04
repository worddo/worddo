<script>
    
    export let words

   
    
  
 
    let fetchValue = {
            "word":"",
            "pronon":"",
            "board":[
              
            ]
          }
    //API DÈINITION
  
        let huptext = words
       
        var link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ `${huptext}`
        
          let contaiFile
          
    fetch(link)
      .then( res => res.json())
      .then(result => {
        result.map(run1)
        function run1(resultNew){
          fetchValue.word = resultNew.word
          fetchValue.pronon = resultNew.phonetic
          resultNew.meanings.map(run2)
          //phonetic vs word here
     
        }
        function run2(meaningsNew){
          contaiFile = {
              "type":"",
              "deex":[
                
              ]
            }
          contaiFile.type = meaningsNew.partOfSpeech
          meaningsNew.definitions.map(run3)
         
          fetchValue.board.push(contaiFile)
        }
        function run3(definitionsNew){
         
       
          let deSam = {
                  "defi":"",
                  "exam": ""
                }
          deSam.defi = definitionsNew.definition
          if (definitionsNew.example!=undefined){
            deSam.exam = "Ex: "+definitionsNew.example
          } else {
            deSam.exam = ''
          }
          
          contaiFile.deex.push(deSam)
         
          
          
        }
       
      })
      .catch( error => {
      
        console.log(error)
      })

      .finally(()=>{
    })
    function Saving(definition,words){
    
    let vocData = JSON.parse(localStorage.getItem('vocabulary'));
    let date = `${new Date().getUTCDate()} - ${new Date().getUTCMonth()+1} - ${new Date().getUTCFullYear()}`
    if (vocData.length === 0 || vocData[0].day !== date) {
let newDay = {};
newDay["day"] = date;
newDay["content"] = [];
vocData.unshift(newDay);
}

     let con = {}
    con["word"] = words
    con["definition"] = definition
    vocData[0].content.push(con)

  localStorage.setItem('vocabulary', JSON.stringify(vocData));

    
 

  }
 
</script>

<div class = 'containerPath'>
  {#each fetchValue.board as types}
    <div class = 'partOfSpeech'>{types.type}</div>
    {#each types.deex as defiexam}
    <div class ='MeaningClass'>
        <button class = 'savevo' on:click = {()=>{Saving(defiexam.defi,words)}}>save</button>
        <div class = 'DefiEng'>{defiexam.defi}</div>
        <div class = 'ExEng'>{defiexam.exam}</div>
    </div>
    {/each}
  {/each}
</div>


<style>

.savevo{
  position: absolute;
    right: 0.4vh;
    top: 0.4vh;
    height: max-content;
    padding: 0.5vh;
    border: 0;
    border-radius: 0.7vh;
    color: #535353;
    background-color: transparent;
    transition: 0.5s ease-in-out;
    font-weight: bold;
    font-size: 1.5vh;

  }

  .savevo:hover{
    background-color: #1d1d1d;
    color:#fefefe;
  }
.containerPath{
  position: absolute;
    width: 100%;
 
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: auto;
    flex-direction: column;
    cursor: pointer;
}
.containerPath::-webkit-scrollbar {
        width: 1vh;
    border-radius: 0.5vh;
    background-color: transparent;
}

.containerPath::-webkit-scrollbar-thumb {
    background-color: #535353;
    border-radius: 1vh;
    cursor: pointer;
}
.partOfSpeech{
  position: relative;
    height: 3vh;
    background-color: rgb(0, 0, 0);
    width: max-content;
    padding:0.5vh;
    padding-inline: 2vh;
    margin-inline:1vh;
    display: flex;
    border:0;
    align-items: center;
    border-radius: 0.5vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
   color:white;
}
.MeaningClass{
  position: relative;
    width: 90%;
    height: max-content;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-block: 1vh;
    background-color: #edece7;
    border: 0;
    border-radius: 1vh;
    flex-direction: column;
    padding-block: 1vh;
}

.DefiEng{
  background-color: transparent;
    color: black;
    font-size: 2vh;
    font-weight: bold;
    font-family: monospace;
    left: 1vh;
  
    position: relative;
    width: 80%;
    height: max-content;
}

.ExEng{
  position: relative;
    width: 80%;
    height: max-content;
    background-color: transparent;
    color: black;
    font-size: 1.5vh;
    font-weight: bold;
    font-family: monospace;
    left: 1vh;
    top: 0.5vh;
}


  
</style>