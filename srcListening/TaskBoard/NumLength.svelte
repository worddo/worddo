<div class ='tile'>number</div>
    <input type = 'number' class = 'in' id = 'numword'>

 <div class ='tile'>length</div>
<input type = 'number' class = 'in' id = 'lenword'>

<style>
    .tile{
        font-size: 2vh;
    color: #eeeeee;
    font-family: monospace;
    margin-right: 1vh;
    font-weight: bold;
    }
    .in{
        position: relative;
    height: 3.5vh;
    border-radius: 1vh;
    padding-inline: 1vh;
    background-color: transparent;
    width: 13%;
    right: 1vh;
    color: #fefefe;
    border: 0.1vh solid #4d4d4d;
    font-size: 3vh;
    font-family: monospace;
    transition: 0.2s;
    }

    .in:hover{
        position: relative;
    height: 3.5vh;
    border-radius: 1vh;
    padding-inline: 1vh;
    background-color: #1d1d1d;
    width: 13%;
    right: 1vh;
    color: #fefefe;
    border: 0.1vh solid #4d4d4d;
    font-size: 3vh;
    font-family: monospace;
    transition: 0.2s;
    }

    .in:focus{
        background-color: #eeeeee;
        color: #535353;
        border:0;
        transition: 0.2s;
    }
</style>