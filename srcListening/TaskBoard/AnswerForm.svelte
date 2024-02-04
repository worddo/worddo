<script>
    export let content
    export let sort 
    import {finalanswerTF, testAns} from '../store'
    import FinalAns from './FinalAns.svelte'
</script>
<div class= 'answerCon'>
<div class = 'topic'>
<p>{sort}</p>
<input class = 'answer'>
</div>
{#if $finalanswerTF }
<FinalAns finalcontent = {content} color = {$testAns[sort-1]}/>
{/if}
</div>

<style>
.topic{
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
}
        .answer{
            border: 0.1vh solid #535353;
    border-radius: 1vh;
    height: 4vh;
    background-color: transparent;
    margin-block: 1vh;
    font-size: 3vh;
    position: relative;
    padding-inline: 1vh;
    margin-right: 2vh;
    flex-grow: 1;
    color: #fefefe;
    transition: 0.2s ease-in-out;
    }

    .answer:hover{
        scale: 0.9;
}

.answer:focus{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

}
    .answerCon{
        display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    }

    p{
        position: relative;
    background-color: #eeeeee;
    height: 4vh;
    border: 0;
    border-radius: 1vh;
    color: #1d1d1d;
    text-align: center;
    width: 6vh;
    flex-shrink: 1;
    font-weight: bold;
    line-height: 4vh;
    font-size: 2vh;
    margin: 2vh;
    font-family: monospace;
    }
    p:hover{
        scale: 0.9;
    }
</style>