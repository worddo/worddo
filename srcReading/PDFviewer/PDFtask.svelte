<script>
  import { scale } from 'svelte/transition'
    import { captureLink,captureTF,isConvertingTess, convertedTextTess, dictionaryDS } from "../store.js";
const Capture = async () => {
    $isConvertingTess = false;
    $convertedTextTess =''
 try {

    // asking permission
    const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });

    const video = document.createElement('video');


    video.srcObject = stream; // Set the video source to the stream

    video.onloadedmetadata = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;

      video.play();
  

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      stream.getVideoTracks()[0].stop();
    

      //$captureLink = canvas.toDataURL();
      canvas.toBlob((blob) => {
  $captureLink = URL.createObjectURL(blob);
  $captureTF = true;
  console.log($captureLink.toString());
}, 'image/jpg');
    };
 } catch (error) {
    console.log(error);
 }
};

function Dictest(){
        $dictionaryDS =!$dictionaryDS
        if ($dictionaryDS == true){
            $isConvertingTess = false;
            $convertedTextTess =''
        }
    } 
</script>

<div in:scale={{duration:500}}>
<button id = 'dic' on:click ={Dictest} class = 'extrabut'>dictionary</button>
<button id = "ScreenCapture" on:click = {Capture} >screensearch</button>
</div>
<style>

    div{
        position: absolute;
    width: max-contentk;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    right: 0;
    }
    button{
        background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #fefefe;
    transition: 0.1s;
    height: max-content;
    display: flex;
    align-items: center;
        width: max-content;
    padding-inline: 1vh;
        margin-inline: 0.5vh;
        border-radius: 0.5vh;
      
        font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    }

    button:hover{
        padding-block: 0.3vh;
        background-color: #fefefe;
        color:#1d1d1d;
    }

</style>