<script>
    import { onMount } from 'svelte';
  import { imageList } from '../store.js';
    let dropZone;
  
    onMount(() => {
      dropZone = document.getElementById('containDragUp');
    });
  
    function DragOver(e) {
      e.preventDefault();
      dropZone.style.backgroundColor = '#000000';
    }
  
    function DragLeave() { // Change back to original color
     dropZone.style.backgroundColor = '#535353';
  }
    function DragDrop(e) {
      dropZone.style.backgroundColor = '#535353';
      e.preventDefault();
      handleFiles(e.dataTransfer.files);
    }
  
    function handleFiles(files) {
      for (var i = 0; i < files.length; i++) {
        if (files[i].type.match('image.*')) {
          
          imageList.update((value)=>{
            let prev = [...value]
            prev.push(URL.createObjectURL(files[i]))
            return prev
          }) 
        
        }
      }
    }

    function Trigger(){
        document.getElementById('fileInput').click()
    }
  </script>
  
  <style>
    #containDragUp {
      position: absolute;
    top: 2vh;
    bottom: 2vh;
    left: 2vh;
    right: 2vh;
    background-color: #535353;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    border-radius: 1vh;
    color: #fefefe;
    }
  
    #fileInput {
      display: none;
    }
  
  
  </style>
  
  <button id='containDragUp' on:dragover={DragOver} on:dragleave={DragLeave} on:drop={DragDrop} on:click={Trigger}>
    drag images or click here<input type='file' multiple id='fileInput' on:change={()=>{handleFiles(event.target.files)}}>
    
  </button>
  