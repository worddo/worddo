<script>
    import TextTask from "../TextTask/TextTask.svelte";
    import ExtraTextTask from "../TextTask/ExtraTextTask.svelte";
    import { dictionaryDS, moreless, selectedText, tab, taskbar,  captureTF, imageTF, isOning, selectedTextForQuickTask, nameTF, selectedTextForQuickTaskPDF } from "../store.js"
  
    import Textarea from "../Textarea/Textarea.svelte";
    import {onMount} from 'svelte'
    import Nothing from "./Nothing.svelte";
    import ImageTask from "../ImageTask/ImageTask.svelte";
    import ChoicePanel from "../ChoicePanel/ChoicePanel.svelte";
    import Dictionary from "../Dictionary/Dictionary.svelte";
    import PdFtask from "../PDFviewer/PDFtask.svelte";
    import UpopCap from "../PDFviewer/UpopCap.svelte";
  
    import UpBoard from "../UploadImage/UpBoard.svelte";
  import QuickTask from "../QuickTask/QuickTask.svelte";
  import NameTab from "../Tab/NameTab.svelte";
  import ContainPage from "./ContainPage.svelte";
  import SavingOwn from "../SavingOwn/SavingOwn.svelte";
  import NoResult from "../ChoicePanel/NoResult.svelte";
  import QuickTaskPdf from "../QuickTask/QuickTaskPDF.svelte";

  onMount(()=>{
    if (!localStorage.getItem('vocabulary')) {
    // If the item doesn't exist, set it in localStorage
    localStorage.setItem('vocabulary', JSON.stringify([]));
    console.log("okkkkkkkkkkkkkk")
  } else {
    console.log('ádsd')
  }
  })

</script>

<div class = "taskbar">
    
    {#if $taskbar == "no"}
        <Nothing/>
    {:else if $taskbar == "text"}
        <img src = "../images/withoutunderwhite.svg" alt = "logo" id ="logo">
        {#if $moreless == "more"}
        <TextTask/>
        {:else} 
        <ExtraTextTask/>
        {/if}
    {:else if $taskbar == "image"}
    <img src = "../images/withoutunderwhite.svg" alt = "logo" id ="logo">
        <ImageTask/>
       
    {:else if $taskbar == "pdf"}
        <img src = "../images/withoutunderwhite.svg" alt = "logo" id ="logo">
        <PdFtask/>
    {/if}

    {#if $selectedText == 'available'}
        <ChoicePanel/>
    {:else if $selectedText == 'owning'}
        <SavingOwn/>
    {:else if $selectedText == 'notfound'}
        <NoResult/>
    {/if}

    {#if $selectedTextForQuickTask}
        <QuickTask/>
    {/if}
    
    {#if $selectedTextForQuickTaskPDF}
    <QuickTaskPdf/>
{/if}
    
    {#if $dictionaryDS}
    <Dictionary/>
    {/if}

    {#if $captureTF}
    <UpopCap/>
    {/if}

   
    

    {#if $imageTF}
    <UpBoard/>
    {/if}

    {#if $nameTF}
        <NameTab/>
    {:else}
        <ContainPage/>
    {/if}
</div>

{#each $tab as item,i}
{#if $isOning[i]} 
    
    <Textarea content = {item} page = {i+1}/>
 {/if} 
{/each}



<style>
 

    .taskbar{
        position: absolute;
    width: 100%;
    background-color: #1d1d1d;
    height: 5vh;
    display: flex;
    align-items: center;
    top: 0;
}   
#logo {
    height: 7vh;
    position: absolute;
    top: 50%;
    transform: translate(0, -44%);
    }
    
</style>
