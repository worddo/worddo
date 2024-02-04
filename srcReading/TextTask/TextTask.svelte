<script>
    import { moreless } from "../store.js"
    import { scale } from 'svelte/transition'
    function Bold(){
        document.execCommand("bold",false,null)
    }

    function Italic(){
        document.execCommand("italic",false,null)
    }

    function Underline(){
        document.execCommand("underline",false,null)
    }



    function Font(){
     
    document.execCommand("fontName",false,document.getElementById("font").value)

    }

    function Size(){
     
     document.execCommand("fontSize",false,document.getElementById("size").value)
 
     }

     function ChangeFontColor(){
        let color = document.getElementById('fontColor').value
        document.execCommand('foreColor', false, color);
     }
     function updatecolor(){
        
        let color = document.getElementById('fontColor').value
        document.getElementById('containFontColor').style.backgroundColor = color
     }
</script>

<div class = "container" in:scale={{duration:500}}>
    <div class = 'group1'>
    <select id = "font" on:change ={Font}>
        <option value ="cursive">cursive</option>
        <option value = "fantasy">fantasy</option>
        <option value = "serif">serif</option>
        <option value = "monospace">monospace</option>
        <option value = '"Times New Roman"'>Times New Roman</option>
    </select>

    <select id = "size" on:change ={Size}>
        <option value ="1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
        <option value = "6">6</option>
        <option value = "7">7</option>
    </select>
    
   
    </div>

    <div class = "group2">
    <button id = "bold" on:click ={Bold}>bold</button>
    <button id = "italic" on:click ={Italic}>italic</button>
    <button id = "underline" on:click ={Underline}>underline</button>
    <button id = 'colorize' on:click ={ChangeFontColor}>colorize</button>
        <div id = 'containFontColor'>
            <input type='color' id = 'fontColor' on:change = {updatecolor} >
        </div>
    

     

    </div>

    <div class = "group3">
       
     <button id = "more" on:click = {()=>{$moreless = "less"}}>more</button>
        </div>
    

</div>
    

<style>
    button{
        background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #fefefe;
    transition: 0.1s;
    height: max-content;
    display: flex;
    align-items: center;
        width: max-content;
    padding-inline: 1vh;
        margin-inline: 0.5vw;
        border-radius: 0.5vh;
      
        font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    }

    button:hover{
        padding-block: 0.3vh;
        background-color: #fefefe;
        color:#1d1d1d;
    }
    #containFontColor{
        height: 2vh;
    width: 4vh;
    background-color: black;
    border-radius: 0.5vh;
    display: flex;
    margin-inline: 1vh;
    }
    #fontColor{
        border: 0;
    padding: 0;
    margin: 0;
    position: relative;
    opacity: 0;
    width: 100%;
    height: 100%;
   
    }
    .container{
        position: absolute;
    right: 0;
    height: 2vh;
    left: 12vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    }

    .group1{
        position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    width: max-content;
    height: 2vh;
    justify-content: space-around;
    }

    .group2{
        display: flex;
    /* width: 16%; */
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-inline: 2vw;
    }

   

    #font{
        width: fit-content;
    border-radius: 0.5vh;
    height: max-content;
    font-size: 2vh;
    border: 0;
    background-color: transparent;
    color: #fefefe;
    padding-inline: 1vh;
    font-family: monospace;
    font-weight: bold;
    }

    #font:hover{
        background-color: #fefefe;
        color:#1d1d1d;
    }
 #size:hover{
        background-color: #fefefe;
        color:#1d1d1d;
    }
    #size{
        width: max-content;
    border-radius: 0.5vh;
    height: max-content;
    font-size: 2vh;
    border: 0;
    background-color: transparent;
    color: #fefefe;
    margin-inline: 1vh;
    padding-inline: 1vh;
    font-family: monospace;
    }

    

    



   

  

    .group3{
        right: 0;
    position: absolute;
    border-radius: 0.5vh;
    width: max-content;
    display: flex;
    flex-wrap: nowrap;
    }


    
</style>