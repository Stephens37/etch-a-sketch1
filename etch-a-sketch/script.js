
let squareContainer = document.getElementById("grid-container");

function createDivs(){
for (let num = 0; num < (squareInput*squareInput); num++){
    let squareInput = document.createElement("div");

    squareInput.classList.add("sketch");
    squareInput.addEventListener("mouseover", changeColorBlue);
    
  document.getElementById("grid-container").appendChild(squareInput);
}
}

function userInput(){
    document.getElementById("grid-container").innerHTML = "";
    squareInput = window.prompt("Choose the number of squares per side.");
    squareContainer.style.setProperty("grid-template-columns", `repeat(${squareInput}, 25px)`);
    
    squareInput = createDivs();
}

function changeColorBlue(){
    this.style.backgroundColor = "blue";
}