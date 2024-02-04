<script>
    import { onMount } from "svelte";
    import { AnsList, CusList, resWord, reswholekey } from "../store";
    export let words,means,sort
    let finalresult
      onMount(()=>{
          
  //algorith for pick key words
      let lenghtmax = words.length
      let n = Math.floor(Math.random()* Math.round(lenghtmax/2)+1) //length:2, randomize 1 to n/2 find hidding numbers
      let L = new Array(n).fill('')
      let A = new Array(lenghtmax).fill(false)
      let W = words.split('')
      
      for (let i=0; i<n;i++){
          let l = Math.floor(Math.random() * (lenghtmax-1))
          while (A[l]){
              l = Math.floor(Math.random() * (lenghtmax -1));
          }
          A[l] = true
         
          
      //     W[l] = `<input style = "padding: 1vh;
      // background-color: #eee;
      // width: 5vh;
      // text-align: center;
      // border-radius: 1vh;
      // font-size: 6vh;
      // font-weight: bold;" maxlength="1" id="QuesMix${sort}input${i}">`
          W[l]= document.createElement('input')
          W[l].style.cssText = `    width: 5vh;
    text-align: center;
    font-size: 6vh;
    height: 7vh;
    font-weight: bold;
    font-family: monospace;
    position: relative;
    border: 0px;
    background-color:#eeeeee;
    color:#333333;
    margin-inline: 0.2vh;
   
    border-radius: 1.5vh;
    transition:0.2s ease-in`
        W[l].maxLength = 1
        W[l].setAttribute('spellcheck', 'false');
        W[l].setAttribute('autocomplete', 'off');
      

  
      }
     
  //     W = W.map(item => {
  //     if (item instanceof HTMLElement) {
  //         return item.outerHTML; // Convert the input element to its HTML representation
  //     } else {
  //         return item; // For other elements, just return them as is
  //     }
  // }).join("")
      let d = 0
  
      for (let i=0;i<W.length;i++){
          if (W[i] instanceof HTMLElement) {
              L[d]=i
             
          W[i].id = `QuesMix${sort}input${d}`
          W[i] = W[i].outerHTML;
          d++
       
      } 
      }
      AnsList.update(value=>{ //Daps Ans
          return [...value,words]
      })
      
      W = W.join('')
      console.log(W)
     // finalresult = W + " ("+parts+") "+means
      //document.getElementById("QuesMix"+`${sort}`).innerHTML = finalresult
      
      document.getElementById('furword'+`${sort}`).innerHTML = W
 
    document.getElementById('furmean'+`${sort}`).innerHTML = means
      
      let CusAns = new Array(n).fill("")
      let whole = words.split('')
     
      for (let i=0;i<n;i++){
          
          let p = document.getElementById(`QuesMix${sort}input${i}`)
          p.addEventListener("focus", function() {
    this.style.backgroundColor = '#1d1d1d'
    this.style.color = '#fefefe'
    
  });
  p.addEventListener("blur", function() {
    this.style.backgroundColor = '#eeeeee';
  this.style.color = '#1d1d1d';
  });
  p.addEventListener("mouseout", function() {
  this.style.backgroundColor = '#eeeeee';
  this.style.color = '#1d1d1d';
});
  p.addEventListener("mouseover", function() {
    this.style.backgroundColor = '#535353'
    this.style.color = '#eeeeee'
  });
          p.addEventListener('input',()=>{
            
              CusAns[i] = p.value
  
              whole[L[i]]=p.value
              
  
              CusList.update((value)=>{
                value[sort] = whole.join('')
                  return value
              })
              if (p.value.length ==1){
                  
                  if (i!=n-1){
                      console.log("d------",d)
                      document.getElementById(`QuesMix${sort}input${i+1}`).focus();
                  }
              } 
  
          
          })
        
      
          
      } 
      }
      )    
      
  </script>
  <div class = 'containMixsBoard'>
      <div class = 'titleQues' id = {"QuesMix"+`${sort}`}>

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
    line-break: auto;
    margin: 1vh;
    font-size: 6vh;
    word-wrap: break-word;
    white-space: pre-line;
    justify-content: center;
    text-align: center;
    color:#333333;
    }
      .containMixsBoard{
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