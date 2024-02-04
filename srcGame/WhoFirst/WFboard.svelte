<script>
  import { TFlist, gameInputWord, listresEnter, nofi, onWhom, resultCheckWord, searchDicTF, stepGame} from "../store";

    function You(){
   
        let Turn = ["Understood, I'll take a look.","Affirmative, I'm prepared.","Acknowledged, I'll review it.","Certainly, I'm all set.","Agreed, I'm ready.","Absolutely, I'm prepared.","Roger that, I'll examine it.","Indeed, I'm all set.","Absolutely, I'm good to go.","Affirmative, I'm ready."]
        let r = Math.floor(Math.random() * (Turn.length-1))
        let See = ["Mulling it over.","Weighing my options.","Digesting this.","Running some calculations.","Letting the gears turn.","Trying to unscrew this mental pickle.","Holding space for an answer.","My brain is currently in high gear.","Just a sec, letting the light bulb dim to a nice soft glow."]
        setTimeout(()=>{
            $nofi = Turn[r]
        },0)

      
        setTimeout(()=>{
            $nofi = See[Math.floor(Math.random() * (Turn.length-1))]
        },1000)

        listresEnter.update(value=>{
           
           
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randomIndex = Math.floor(Math.random() * letters.length);
  letters = letters.charAt(randomIndex);
  let link =`https://api.datamuse.com/words?sp=${letters}*`
        fetch(link)
        .then(res=>res.json())
        .then(res =>{
            let ListWord = []
            res.map((value)=>{
                ListWord.push(value.word)
            })
            let text = ListWord[Math.floor(Math.random() * (ListWord.length-1))]
            value.push(text)
            $gameInputWord = text
            $searchDicTF = true
            $resultCheckWord = true
        })
 
            return value})
            console.log($TFlist)
        setTimeout(()=>{
            TFlist.update(value=>{
            value.push('ai')
            //$onWhom = 'user'
                //nofi
                let noi = ["Nailed it!","Absolutely stellar! ✨","First-rate work!","Exceeded expectations!","Bravo!","Top-notch execution!","Masterful achievement!","You knocked it out of the park! ⚾","Pure brilliance!","Couldn't ask for more!"]
           
                $nofi = noi[ Math.floor(Math.random() * (noi.length-1))]
                
            return value
        }) 
      
        },2000)
      

     
        $stepGame = 'solving'

    }   
    function Me(){
    $onWhom = 'user'
    let noi = ["After you, pal!","Go for it, my friend!","Your call, champ!","Lead the way, sunshine!","You first, mate!","Knock yourself out, buddy!","Take the stage, amigo!","The floor is yours, partner!","On your cue, teammate!","You're the captain, steer us home!"]
        $nofi = noi[ Math.floor(Math.random() * (noi.length-1))]
        $stepGame = 'solving'
    }

    //notification
    let HiList = ["Hello, how are you today?","Good morning, it's great to see you!","Hi there, I hope you're doing well.","Hey, how's your day going?","Good to see you, how have you been?","Greetings, I trust you're having a good day.","Howdy, hope everything's going smoothly for you.","Salutations, I'm glad we could meet today.","Aloha, I hope you're enjoying your day.","Bonjour, comment ça va?"]
    let ChoiceList = ["Who should go first, you or me?","Shall we decide who goes first?","How about we take turns, starting with you?","Let's pick who goes first, shall we?","Do you want to go first, or should I?","How about we make a choice together?","Let's decide who goes first, okay?","Should we flip a coin to decide?","How about we alternate turns, starting with you?","Let's figure out who goes first, sound good?"]

    setTimeout(()=>{
        let r = Math.floor(Math.random() * (HiList.length-1))
        $nofi = HiList[r]
    },1000)

    setTimeout(()=>{
        let h = Math.floor(Math.random() * (ChoiceList.length-1))
        $nofi = ChoiceList[[h]]
    },4000)

</script>
<div id = 'containWF'>
    <div id = 'WFtitile'>who's first?</div>
    <div id = 'containWFchoice'>
        <button id = 'you' on:click ={You}>you</button>
        <button id = 'me' on:click = {Me}>me</button>
    </div>
</div>

<style>
    #containWF{
        position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    }

    #WFtitile{
        font-size: 7vh;
    font-weight: bold;
    font-family: monospace;
    color: #eeeeee;
    }

    #containWFchoice{
        margin-block: 6vh;
    width: 25vw;
    display: flex;
    justify-content: space-evenly;
    }

    #you{
        width: 15vh;
    aspect-ratio: 16/9;
    font-size: 4vh;
    font-weight: bold;
    font-family: monospace;
    border: 0.1vh solid #535353;
    background-color: transparent;
    color: #eeeeee;
    border-radius: 2vh;
    transition: 0.5s;
    }

    #me{
        width: 15vh;
    aspect-ratio: 16/9;
    font-size: 4vh;
    font-weight: bold;
    font-family: monospace;
    border: 0.1vh solid #535353;
    background-color: transparent;
    color: #eeeeee;
    border-radius: 2vh;
    transition: 0.5s;
    }

    #me:hover{
        background-color: black;
        color:white;
        border:0;
        border-radius: 1vh;
    }
    #you:hover{
        background-color: black;
        color:white;
        border:0;
        border-radius: 1vh;
    }
</style>