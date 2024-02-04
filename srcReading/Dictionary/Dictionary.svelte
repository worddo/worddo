<script>
   
    import { dictionaryDS, enterText, stepDS } from "../store";
    import BoardDic from "./BoardDic.svelte";
    
    import DefiDs from "./DefiDS.svelte";
    import SynDs from "./SynDS.svelte";
    import AntDs from "./AntDS.svelte";
    import CoAds from "./CoADS.svelte";
    import CoNds from "./CoNDS.svelte";
  import NoResult from "./NoResult.svelte";
  import { slide } from 'svelte/transition'
    let search = false
    let haveornot = 'no'
    function change(){
       
       $stepDS = 'defi'
        search = true
        let text = document.getElementById('enterWord').value
        var link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ `${text}`

        fetch(link)
        .then(res=>{
            if (res.ok){
                haveornot = true
                $enterText = text
               
            } else {
                haveornot = false
            }
        })
        
    }

    function Exit(){
        $dictionaryDS = false
    }
</script>
<button id = 'backgroundexit' on:click = {Exit}></button>
<div id = 'containerDictionary' transition:slide={{duration:500}}>
    
    <div id ='containSearch'>
    <input type = 'text' id='enterWord' autocomplete='off'>
    <button id = 'SearchDic' on:click = {change}>>></button>
    
</div>
    <div id ='containerDic'>
        {#if search}
        {#key $enterText}
            {#if haveornot == true}
                <div id ='contInnerDic' transition:slide={{duration:500}}>
                <div id ='behindblur'></div>
                <BoardDic/>
                <DefiDs/> 
                <SynDs/>
                <AntDs/>
                <CoAds/>
                <CoNds/>  
            </div>
            {:else if haveornot == false}
                <NoResult/>
            {/if}
       
        {/key}    
        {/if}
    </div>
</div>

<style>
    #behindblur{
        position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #1c1c1c;
    }
    #contInnerDic{
        position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    overflow: hidden;
    border-radius: 1.5vh;
    }
#containSearch{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 7vh;
    background-color: #1c1c1c;
    border-radius: 1.8vh;
    padding-inline: 1vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    
}
    #backgroundexit{
        position: fixed;
        top:0;
        right:0;
        left:0;
        bottom:0;
        opacity: 0;
        z-index:3;
    }
    #containerDictionary{
        position: fixed;
    right: 2vh;
    background-color: transparent;
    aspect-ratio: 9/16;
    bottom: 2vh;
    z-index: 4;
    top: 7vh;
    }



    input{
        position: relative;
    flex: 1;
    margin-right: 1vh;
    height: 5vh;
    border: 0;
    border-radius: 1vh;
    font-family: monospace;
    z-index: 1;
    background-color: #fefefe;
    color: #535353;
    font-size: 2.5vh;
    padding: 0;
    padding-inline: 1vh;
    font-weight: bold;
    }

    input:focus{
        outline:none;
    }

    #SearchDic{
        position: relative;
    height: 5vh;
    background-color: transparent;
    width: max-content;
    padding: 0;
    padding-inline: 2vh;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 1vh;
    font-size: 3vh;
    font-family: monospace;
    color: white;
    z-index: 1;
}

    #SearchDic:hover{
        background-color: #fefefe;
        color:#535353;
    }

    #containerDic{
        background-color: transparent;
    position: absolute;
    width: 100%;
    height: 82vh;
    top: 0;
    }
</style>