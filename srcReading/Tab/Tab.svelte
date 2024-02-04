<script>
    import { onMount } from "svelte";
    import { onTab, typesFile, taskbar, tab, isOning} from "../store.js";

    export let numtab = 0   //này là draft
    let containerTab 
    export let pagenum = 0 // này là trang thứ
    let backcolor = 'transparent'
    function change(){
        $onTab = pagenum; 
        console.log(pagenum)
        $taskbar = $typesFile[pagenum-1]
       
    }

    function Closing(){
        $isOning[pagenum-1] = false
        $taskbar = $typesFile[pagenum-2]

    }

    onMount(()=>{
        containerTab = "containerTab" + (pagenum).toString()
        if (pagenum==$onTab){
            backcolor = '#535353'
            console.log(backcolor)
        }
  
    })
  
</script>

<div class = 'container' id = {containerTab} style ={`background-color:${backcolor}`}>
<button id = 'tab' on:click={change}>{numtab}</button>
<button id = 'close' on:click = {Closing}>X</button>
</div>

<style>

    #close{
        position: absolute;
    height: max-content;
    width: max-content;
    background-color: transparent;
    right: 0.5vh;
    color: #eeeeee;
    display: flex;
    border: 0;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5vh;
    padding: 0.3vh;
    text-align: center;
    }

    #close:hover{
        background-color: black;
        color:white;
    border-radius: 0.5vh;
    }
    .container{
        position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2vh;
    background-color: transparent;
    border-radius: 1vh;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

}
.container::-webkit-scrollbar {
  width: 0;
}
.container :hover{
    background-color:#535353;
}
    #tab{
        background-color: transparent;
    width: 100%;
    height: 5vh;
    color: #eeeeee;
    border: 0;
    font-family: monospace;
    font-size: 2vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 1vh;
    font-weight: bold;
    transition:0.5s;
    cursor:pointer;
    }
    #tab:hover{
        background-color: #eeeeee;
    color: #1d1d1d;
    transition: 0.2s ease-out;
    scale: 0.9;
    left: -2vh;
    }
    #tab:active{
        background-color: #eeeeee;
    }
 
</style>