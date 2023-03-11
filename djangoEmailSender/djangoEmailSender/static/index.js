/**Javascript codes for the projects
 * New codes i had to learn but did not need
 * 
 *  if(fil){
        let reader = new FileReader();

        reader.onload = function(e){
        // textfile.src = reader.result;
        textarea.innerText = e.target.result;
        // upload.innerHTML = e.target.result;
      },  
    
      reader.readAsDataURL(fil);
      
    }

    let dropbox;

    dropbox = document.getElementById("dropbox");
    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", drop, false);

    function drop(e) {
        e.stopPropagation();
        e.preventDefault();
    
        const dt = e.dataTransfer;
        const files = dt.files;
    
        handleFiles(files);
    }
 */



const textfile = document.getElementById('file')
const textarea = document.getElementById('compose')
const upload = document.getElementById('uploads')
const hidden = document.querySelector('div.hide-this');
const filesrc = document.getElementById('filesrc')
const close = document.getElementById('close')
let formbody = document.querySelector('form')

textfile.addEventListener('change', (e) =>{
    
       // textarea.value = fil 
    removeclass(e);
    
   
})

function removeclass(e) {
    let fil = e.target.files[0];
    hidden.classList.remove('hidden')
    let numSize = fil.size
    if (numSize < 1024){
        filesrc.value = fil.name + ' ' + `${numSize} bytes`;
    }else if(numSize >= 1024 && numSize < 1048576){
        filesrc.value = fil.name + ' ' + `${(numSize / 1024).toFixed(1)} KB`;
    }else if(numSize >= 1048576){
        filesrc.value = fil.name + ' ' + `${(numSize / 1048576).toFixed(1)} MB`;
    }   
    else{
        return;
    }

}

function removeevent() {
    textfile.removeEventListener('change', removeclass);
    hidden.classList.add('hidden')
    filesrc.value = ""
}

close.addEventListener('click', removeevent)







