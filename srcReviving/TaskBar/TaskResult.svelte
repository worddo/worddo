<script>
    import {  choice} from "../store";

   function Home(){
       $choice = 'enter'
   }
</script>
<button id ='add' on:click = {Home}>home</button>


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