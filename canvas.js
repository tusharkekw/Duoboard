let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");

let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;

let download = document.querySelector(".download");

let mouseDown = false;

//api
let tool = canvas.getContext("2d");

tool.strokeStyle = penColor ; //for color
tool.lineWidth = penWidth; //line width

// tool.beginPath(); //new graphic(path)
// tool.moveTo(10,10);//start pt.
// tool.lineTo(200,200);
// tool.stroke();

// tool.lineTo(300,100);
// tool.stroke();

//mousedown - start new path , mousemove - path fill

canvas.addEventListener("mousedown", (e) =>{
    mouseDown = true;
    tool.beginPath();
    tool.moveTo(e.clientX,e.clientY);
})

canvas.addEventListener("mousemove",(e)=>{
    if(mouseDown){
        tool.lineTo(e.clientX,e.clientY);
        tool.stroke();  
    }
})

canvas.addEventListener("mouseup",(e)=>{
    mouseDown = false;
})

pencilColor.forEach((colorElem)=>{
    colorElem.addEventListener("click",(e)=>{
        let color = colorElem.classList[0];
        penColor = color;
        tool.strokeStyle = penColor;
    })
})


pencilWidthElem.addEventListener("change",(e)=>{
    penWidth = pencilWidthElem.value;
    tool.lineWidth = penWidth
})

eraserWidthElem.addEventListener("change",(e)=>{
    eraserWidth = eraserWidthElem.value;
    tool.lineWidth = penWidth
})


eraser.addEventListener("click",(e)=>{
    if(eraserFlag){
        tool.strokeStyle = eraserColor;
        tool.lineWidth = eraserWidth;
    }
    else {
        tool.strokeStyle = penColor;
        tool.lineWidth = eraserWidth;
    }
})

download.addEventListener("click",(e) => {
    let url = canvas.toDataURL();
    let a = document.createElement("a"); 
    a.href = url;
    a.download = "board.jpg";
    a.click(); 
})