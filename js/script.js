function closeMenu(){

    document.getElementById("check").checked = false;
}

// file reader 

var fileInput = document.querySelector(".file-input")
var inputArea = document.querySelector(".file-area")
var fileNameArea = document.querySelector(".file-selected-area")
var fileName = document.querySelector(".file-name")
var closeFileName = document.querySelector(".wrong-mark")
let file;

fileNameArea.style.display = 'none';


    
    
fileInput.addEventListener('change',()=>{
        
    if (!fileInput.files.length) return;

        file = fileInput.files[0].name;
        
        fileNameArea.style.display = 'flex';
        inputArea.style.display = "none";
        fileName.textContent = file;

        
        
        console.log(file);
})

closeFileName.addEventListener('click',()=>{

    fileNameArea.style.display = 'none';
    inputArea.style.display = "flex";

    fileInput.value = ""
})
