let userInput = prompt("Choose the number of squares.");
let squareContainer = document.getElementById("grid-container");
function createDivs(num){
for (let num = 0; num < 100; num++){
    let squares = document.createElement("div");
    squares.classList.add("sketch");
  squares.addEventListener("mouseover", changeColorBlue);
    
  document.getElementById("grid-container").appendChild(squares);
}
}
createDivs(userInput);

function changeColorBlue(){
    this.style.backgroundColor = "blue";
}