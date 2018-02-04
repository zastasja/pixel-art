let canvas = document.getElementById("pixel_canvas");
let height = document.getElementById("input__height");
let width = document.getElementById("input__width");
let sizePicker = document.getElementById("size__picker");
let color = document.getElementById("color__picker");

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    for (let r = 0; r < height.value; r++){
        const row = canvas.insertRow(r);
        for (let c = 0; c < width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare () {
     this.setAttribute("style", `background-color: ${color.value}`);
 }
