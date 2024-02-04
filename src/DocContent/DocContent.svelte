<script>
    import IllustrateImg from "../DaskBoard/illustrateIMG/illustrateIMG.svelte";
import { slide,blur } from 'svelte/transition'
   
  function store(){
        window.open('http://localhost:1805/#/store', '_blank')
    }
 
   
  </script>
<div id ='contentDoc'>
    <div class = 'containdoc'>
      
        <button on:click = {store} class="material-symbols-outlined" id = 'storelink'>
            archive
        </button>
    
        <div id = 'contaidoc1part1'>
            <img in:blur ={{duration:1000}} src = '../images/logob.svg' alt = 'english' id = 'superlogo'>
            <div id ='message'>cultivating your english excellence</div>
        
       
        <div id = 'contaidoc1part2'>
            
            <button in:slide ={{duration:1000}} id = 'pdfbut' class = 'choice' on:click = {()=>{window.open('http://localhost:1805/#/reading', '_blank')}}><span class="material-symbols-outlined">
                book_5
                </span>READING</button>
            <button in:slide ={{duration:1000}} id = 'listbut' class = 'choice' on:click = {()=>{window.open('http://localhost:1805/#/listening', '_blank')}}><span class="material-symbols-outlined">
                headset_mic
                </span>LISTENING</button>
          
            <button in:slide ={{duration:1000}} id = 'revibut'class = 'choice' on:click = {()=>{window.open('http://localhost:1805/#/reviving', '_blank')}}><span class="material-symbols-outlined">
                play_lesson
                </span>REVIVING</button>
            <button in:slide ={{duration:1000}} id = 'game' class = 'choice' on:click = {()=>{window.open('http://localhost:1805/#/game', '_blank')}}><span class="material-symbols-outlined">
                sports_esports
                </span>GAME</button>
           

        </div>
   
         </div>
      
    </div>
    <div class ='containdoc' style = 'height:max-content;'>
        <IllustrateImg/>
    </div>
    <div id ='containdocinfor' >
        <div class = 'topic'>Contacting us for supports</div>
        <div id = 'containinfor'>
            <div class = 'infor'><span class="material-symbols-outlined">
                person
                </span>Nguyễn Văn Tây</div>
            <div class = 'infor'><span class="material-symbols-outlined">
                perm_phone_msg
                </span>0973884347</div>
            <div class = 'infor'><span class="material-symbols-outlined">
                person
                </span>Nguyễn Hoàng Ngân</div>
            <div class = 'infor'><span class="material-symbols-outlined">
                perm_phone_msg
                </span>0941393037</div>
            <div class = 'infor'><span class="material-symbols-outlined">
                school
                </span>Trường THPT Nguyễn Trân</div>
            <div class = 'infor'><span class="material-symbols-outlined">
                mail
                </span>worddolearning@gmail.com</div>
        </div>
    </div>

</div>

<style>
 
    #storelink{
        position: absolute;
    top: 1vh;
    left: 1vh;
    font-size: 4vh;
    display: flex;
    align-items: center;
   cursor: pointer;
   background-color: transparent;
    }
#containdocinfor{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
}
    #containinfor{
        display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: #2a2a2a;
    border-radius: 2vh;
    width: 61%;
    height: max-content;
    padding: 2%;
    justify-content: center;
    }
    .infor{
        color: #eeeeee;
    font-size: 3vh;
    font-family: monospace;
    margin-block: 1vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    border-radius: 2vh;
    padding: 1vh;
    transition:1s;
    }
    .infor:hover{
        background-color: #535353;
        transition:0.5s;
    }
     .topic{
    font-size: 2vh;
    width: max-content;
    padding: 1vh;
    border-radius: 1.5vh;
    padding-inline: 3vh;
    font-family: monospace;
    color: #eeeeee;
    font-weight: bold;
    background-color: #2a2a2a;
    letter-spacing: 0.2vh;
    transition: 1s;
    cursor: pointer;
   }

   .topic:hover{
    padding-inline:6vh;
    transition:0.3s;
   }
    .containdoc{
        position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 6vh;
    margin-right: 1vh;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
}
#pdfbut{
    background-color: #eb4434;

}
#listbut{
    background-color: #4385f5;
}

#revibut{
    background-color: #34a853;
}
#game{
    background-color: #fcbc05;
}

    .choice{
        width: 25vh;
    padding: 0vh;
    border-radius: 2vh;
    aspect-ratio: 2.5/1;
    font-size: 2.5vh;
    font-weight: bold;
    font-family: monospace;
    margin-top: 2vh;
    margin-inline: 1vh;
    transition: 0.5s;
    display: flex;
    align-items: center;
    padding-inline: 1vh;
    justify-content: flex-start;
    color: #eeeeee;
    opacity: 0.8;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

}
    
    .choice:hover{
        scale:1.1;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        border-radius: 2vh;
        transition:0.2s;
        opacity:1;
    }
   
#contaidoc1part2{
    position: relative;
    width: 100%;
    display: flex;
    height: 24%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    margin-top: 2vh;
}
#message{
    font-size: 3vh;
    width: max-content;
    padding: 1vh;
    border-radius: 1.5vh;
    padding-inline: 3vh;
    font-family: monospace;
    color: #2a2a2a;
    font-weight: bold;
    background-color: transparent;
    letter-spacing: 0.2vh;
   
    cursor: pointer;
}
#superlogo{
    position: relative;
    width: 80%;
    margin-bottom: 1vh;
    transition:0.5s;
    cursor:pointer;
}

#superlogo:hover{
    transition:0.5s;
    width:85%;
}
#contaidoc1part1{
    width: 80%;
    position: relative;
    height: max-content;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    flex-direction: column;
}


    #contentDoc{
          height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: block;
    overflow: auto;
    }

  #contentDoc::-webkit-scrollbar{
    width:1vh;
  }
  #contentDoc::-webkit-scrollbar-thumb{
    background-color:#535353;
  }
</style>