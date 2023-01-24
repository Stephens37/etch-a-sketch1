let squareContainer = document.getElementById("grid-container");
for (let i = 0; i < 256; i++){
    let squares = document.createElement("div");
    squares.classList.add("sketch");
  squares.addEventListener("mouseover", changeColorBlue);
    
  document.getElementById("grid-container").appendChild(squares);
}

function changeColorBlue(){
    this.style.backgroundColor = "blue";
}