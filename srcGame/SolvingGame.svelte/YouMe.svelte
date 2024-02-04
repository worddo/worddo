<div id = 'containYM'>
 
    <div class = 'YMcontent' id = 'YMyou'>you</div>

    <div class = 'YMcontent' id ='YMme'>me</div>
</div>

<style>
   #containYM{
    position: absolute;
    top: 1vh;
    right: 1vh;
    display: flex;
   }

    .YMcontent{
 text-align: center;
    line-height: 3vh;
    width: max-content;
    padding-inline: 2vh;
    font-size: 2vh;
    border-radius: 1vh;
    padding-block: 0vh;
    height: max-content;
    font-weight: bold;
    font-family: monospace;
    color: white;
    }

    #YMyou{
        background-color:#ff6464;
        margin-right:0.5vh;
    }
    #YMme{
        background-color: #139487;
        margin-left:0.5vh;
    }
</style>