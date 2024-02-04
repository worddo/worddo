<script>
    import EnterForm from "../EnterForm/EnterForm.svelte";
  import { LisEnter } from "../store";
 
</script>
<div id ='enterBoard'>
    <div class = 'containTitleName'>
        <div class = 'title'>words/clauses</div>
      
        <div class = 'title'>meanings</div>
        
    </div>
    {#each $LisEnter as ele,i} 
        <EnterForm sort ={i}/>
    {/each}

   
   
</div>

<style>


   
       .title{
        width: 47%;
    font-size: 3vh;
    font-family: cursive;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #535353;
    }
     .containTitleName{
        position: relative;
    display: flex;
    width: 93%;
    height: fit-content;
    top: -1vh;
    margin-bottom: 3vh;
    justify-content: space-between;
    }
    #enterBoard{
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        padding:3vh;
        overflow: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding-top: 8vh;
    }
</style>