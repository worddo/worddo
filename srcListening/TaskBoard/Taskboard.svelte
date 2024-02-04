<script>
  import { finalanswerTF, lenWord, numWord, ongoingText, result } from '../store';
    import NumLength from './NumLength.svelte'
    function Convert(){
        var yt = document.getElementsByClassName('answer');
        Array.from(yt).forEach(test);

    function test(element) {
        element.value =''
    }
        $finalanswerTF = false
        result.update(value =>{
            return []
        })
        $numWord = document.getElementById('numword').value
        $lenWord = document.getElementById('lenword').value
        let text = $ongoingText
      
const regex = /\w+\’\w+|\b\w+\b|[^\w\s\n]|\n|\s/g;

let matches = [];
let match;
while ((match = regex.exec(text))) {
  matches.push(match[0]);
}

      //let ui = text.split(/\W+/).filter(word => word && word != "'");
      
      //let ui = text.match(/\w+\’\w+|\b\w+\b/g)
      let ui = matches
    let v = $lenWord
    let r = $numWord
    let a = Math.round(ui.length/$numWord)
    let yep 
    function testText(text) {
        var pattern = /^[a-zA-Z0-9]+$/;
        return pattern.test(text);
    }
    
    for (let i=0; i<=r-1; i++){
        if (i==r-1){
            let max = ui.length-1
          let l = max
          let d = 0
          while (i*a<l){
            if (testText(ui[l])){
                d++
            }
            if (d == v){
              
                 break 
            }
            l=l-1
          }

           yep = Math.floor(Math.random() * (max - i*a + 1)) + i*a
          while (!testText(ui[yep]) || (yep>l)){
                yep = Math.floor(Math.random() * (max - i*a + 1)) + i*a
               
                }
                l = yep
                let S = ""
                d= 0
                while (l<max){
                    if (testText(ui[l])){
                        
                        if (d==v-1)
                            {S+=ui[l]}
                        else {
                            S+=ui[l]+" "
                        }
                        d++
                        if (d==1){
                            ui[l] = "("+`${i+1}`+")"+ "_ ".repeat(ui[l].length)
                        } else{
                            ui[l] = "_ ".repeat(ui[l].length)
                        }
                }
                    if (d==v){break}
                    l++
            }
            console.log(S)
                result.update(value=>{
                return [...value,S]
            })
            
           
        } else 
        
        {
          let max = (i+1)*a-1
          let l = max
          let d = 0
        
          while (i*a<l){
            if (testText(ui[l])){
                d++
            }
            if (d == v){
              
                 break 
            }
            l=l-1
          }
           yep = Math.floor(Math.random() * ((i+1)*a-1 - i*a + 1)) + i*a
          while (!testText(ui[yep]) || (yep>l)){
                yep = Math.floor(Math.random() * ((i+1)*a-1 - i*a + 1)) + i*a
               
                }
                l = yep
                let S = ""
                d= 0
                while (l<max){
                    if (testText(ui[l])){
                        
                        if (d==v-1)
                            {S+=ui[l]}
                        else {
                            S+=ui[l]+" "
                        }
                        d++
                        if (d==1){
                            ui[l] = "("+`${i+1}`+")"+ "_ ".repeat(ui[l].length)
                        } else{
                            ui[l] = "_ ".repeat(ui[l].length)
                        }
                        console.log(l,"asasasas",ui[l])
                }
                    if (d==v){break}
                    l++
            }
            console.log(S)
                result.update(value=>{
                return [...value,S]
            })
          
        }
       
    }
    document.getElementById('textarea').value = ui.join('')
    console.log($result)
    }
</script>
<div id = 'taskboard'>
    <div id = 'containtask'>
        <NumLength/>
    <button id = 'convert' on:click = {Convert}>Convert</button>
    
</div>
</div>

<style>

    #containtask{
        width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    }
    #taskboard{
        position: absolute;
    background-color: transparent;
    border: 0.1vh solid #535353;
    height: 6vh;
    border-radius: 1.8vh;
    display: flex;
    width: 51vh;
    flex-wrap: nowrap;
    bottom: 3vh;
    right: 30vw;
    margin-right: 6vh;
    flex-direction: row;
      transition: 0.5s;
    }
    #taskboard:hover{
         transition: 0.2s;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   
    }
    #convert{
        position: relative;
    height: 4vh;
    width: max-content;
    padding-inline: 2vh;
    display: flex;
    background-color: #eeeeee;
    align-items: center;
    border-radius: 1vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    color: black;
    right: 0;
    }

    #convert:hover{
        background-color: #fefefe;
        color:#535353;
    }
</style>