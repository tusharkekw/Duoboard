let optionsCont = document.querySelector(".options-cont");
let optionsFlag = true;
let toolsCont = document.querySelector(".tools-cont");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");

let pencilFlag = true;
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let eraserFlag = true;

optionsCont.addEventListener("click",(e)=>{
    optionsFlag = !optionsFlag;
    if(optionsFlag == true) openTools();
    else closeTools();
})


function openTools(){
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars"); 
    toolsCont.style.display = "flex";
}
function closeTools(){
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display = "none";
    pencilToolCont.style.display = "none";
    eraserToolCont.style.display = "none";
}

pencil.addEventListener("click", (e)=>{
    pencilFlag = !pencilFlag;
    if(pencilFlag == true){
        pencilToolCont.style.display = "block";
    }
    else{
        pencilToolCont.style.display = "none";
    }
})

eraser.addEventListener("click", (e)=>{
    eraserFlag = !eraserFlag;
    if(eraserFlag == true){
        eraserToolCont.style.display = "Flex";
    }
    else{
        eraserToolCont.style.display = "none";
    }
})