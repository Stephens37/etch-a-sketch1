
let squareContainer = document.getElementById("grid-container");

function createDivs(){
for (let num = 0; num < (squareInput*squareInput); num++){
    let squareInput = document.createElement("div");

    squareInput.classList.add("sketch");
    squareInput.addEventListener("mouseover", () => {
        squareInput.style.backgroundColor = changeColor();
    });
    
  document.getElementById("grid-container").appendChild(squareInput);
}
}

function userInput(){
    document.getElementById("grid-container").innerHTML = "";
    squareInput = window.prompt("Choose the number of squares per side.");
    squareContainer.style.setProperty("grid-template-columns", `repeat(${squareInput}, 25px)`);
    
    squareInput = createDivs();
}

function changeColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max-min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g}, ${b})`;
}
