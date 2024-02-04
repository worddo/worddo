<script>
      import { tab, onTab, step, typesFile, preventReloadFile, taskbar, isOning, imageList, nameTF } from "../store.js";
function increasePage() {
  imageList.update((value)=>{
    return []
  })
   step.update((value)=>{
    const newstep = [...value]
    newstep.push("")
    return newstep;
   })
  tab.update((currentTab) => {
    const newTab = [...currentTab];
    const s = "draft_" + (newTab.length + 1);
    $onTab = newTab.length + 1;
    console.log($onTab)
    newTab.push(s);
    return newTab;
  });

  typesFile.update((value)=>{
    const newFile = [...value]
    newFile.push("no")
    $taskbar = "no"
    return newFile
  })

  isOning.update((value)=>{
    let prev = [...value]
    prev.push(true)
    return prev
  })

  preventReloadFile.update((value)=>{
    const up = [...value]
    up.push(false)
    return up
  })
}
</script>

<button id = 'exit' class = 'inout' on:click = {()=>{$nameTF=true}}>exit</button>
<button  id = 'create' class = 'inout'on:click={increasePage}>add</button>

<style>
  #create{
    right: 1vh;
  }
  #exit{
    left:1vh;
  }
       .inout{
        position: absolute;
    top: 1vh;
    font-family: monospace;
    border: 0;
    border-radius: 0.5vh;
    padding-inline: 1.5vh;
    padding-block: 0.5vh;
    width: max-content;
    font-size: 2vh;
    font-weight: bold;
    height: max-content;
    background-color: transparent;
    color: #eeeeee;
       }

       .inout:hover{
        color:#1d1d1d;
        background-color:#fefefe
       }
</style>