<script>
    import {onMount} from 'svelte'
    import {  choseText, coordinateMouse, onTab, selectedText, selectedTextForQuickTask } from '../store.js'
    let pagenow = 'textword' + ($onTab-1).toString()
    onMount(()=>{
         document.getElementById(pagenow).addEventListener("click",()=>{
        console.log(document.queryCommandValue("fontName"))
          document.getElementById("font").value = document.queryCommandValue("fontName")
          document.getElementById("size").value = document.queryCommandValue("fontSize")
    })
    })
let prevText =''
let text = ''
    function TestSelection(event){
        console.log("bug here")
        prevText = text
        text = document.getSelection().toString()
        
        //SỬ LÝ ĐẦU VÀO Ở ĐÂY
        if ((text!="") && (text!=prevText)){
            console.log(text)
           
            $choseText = text
            coordinateMouse.update(()=>{
                console.log(event.clientX, event.clientY)
                return [event.clientX, event.clientY]
            })
            
            console.log($coordinateMouse[0],$coordinateMouse[1])
            $selectedTextForQuickTask = true
        } else {
            $selectedTextForQuickTask = false
            $selectedText = false
        }
    }
      
    function Delte(){
    $selectedTextForQuickTask = false
  
    }

</script>

<div contenteditable="true" id ={pagenow} class = "textwrite" on:mouseup={TestSelection} on:mousedown={Delte} spellcheck="false"></div>

<style>

    .textwrite{
        background-color: rgb(255, 255, 255);
    /* width: 100vw; */
    padding: 2%;
    /* height: 97%; */
    left: 0;
    top: 0;
    position: absolute;
    bottom: 0;
    overflow: auto;
    color: black;
    right: 0;
    }

    .textwrite:focus{
        outline:none;
    }
</style>