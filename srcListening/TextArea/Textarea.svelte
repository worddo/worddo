<script>
  import { editBoard } from "../store.js";

    function Edit(){
        $editBoard = true

    }
</script>

<button id = 'enterText' on:click = {Edit}>Edit</button>
<textarea id = 'textarea'  spellcheck="false" readonly></textarea>

<style>
    #enterText{
     
        position: absolute;
    height: 4vh;
    width: max-content;
    padding-inline: 3vh;
    margin-inline: 1vh;
    display: flex;
    align-items: center;
    border-radius: 1vh;
    left: 2vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    background-color: transparent;
    color: #eeeeee;
    bottom: 3vh;
    border: 0.1vh solid #535353;
    z-index: 1;
    transition: 0.5s;
    }
    #enterText:hover{
        background-color: #fefefe;
        color:#1d1d1d;
        border:0;
        transition: 0.2s;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    #textarea{
        resize: none;
    position: relative;
    background-color: transparent;
    border: 0.1vh solid #535353;
    height: 72vh;
    flex-grow: 1;
    top: 3vh;
    left: 3vh;
    margin-right: 6vh;
    padding: 4vh;
    border-radius: 2vh;
    overflow: auto;
    color: #fefefe;
    transition: 0.5s;
    cursor:pointer;
    }
    #textarea:hover{
        transition: 0.2s;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    textarea::-webkit-scrollbar {
        width: 1.5vh;
    border-radius: 0.5vh;
    background-color: transparent;
}

textarea::-webkit-scrollbar-thumb {
    background-color: #eeeeee;
    border-radius: 1vh;
    cursor: pointer;
}
</style>