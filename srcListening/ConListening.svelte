<script>
    import Taskbar from "./TaskBar/Taskbar.svelte";
      import Taskboard from "./TaskBoard/Taskboard.svelte";
      import Textarea from "./TextArea/Textarea.svelte";
      import Dictionary from './Dictionary/Dictionary.svelte'
    import { dictionaryDS, editBoard} from "./store.js"
      import EditBoard from "./EditBoard/EditBoard.svelte";
      import AnswerSheet from "./TaskBoard/AnswerSheet.svelte";
    </script>
    <div id = 'taskbar'> 
        <img src = "../images/withoutunderwhite.svg" alt = "logo" id ="logo">
            <Taskbar/>
        
    </div>
    <div id = 'conLis'>
        <Taskboard/>
    <Textarea/>
    <div id = 'contaitask'>
    
    <AnswerSheet/>
    </div>
    </div>
    
    {#if $dictionaryDS}
        <Dictionary/>
    {/if} 
    
    {#if $editBoard}
        <EditBoard/>
    {/if}
    
    <style>
        #conLis{
            position: absolute;
    top: 5vh;
    height: 95vh;
    width: 100%;
    display: flex;
    background-color: #2a2a2a;
    
        }
        #contaitask{
            position: relative;
    display: flex;
    width: 30vw;
    margin-top: 3vh;
    margin-bottom: 3vh;
    flex-direction: column;
    margin-right: 3vh;
        }
        #taskbar{
            position: absolute;
        width: 100%;
        background-color: #1d1d1d;
        height: 5vh;
        display: flex;
        align-items: center;
        top: 0;
        }
    
        img {
            height: 7vh;
    position: absolute;
    top: 50%;
    transform: translate(0, -44%);
        }
    </style>