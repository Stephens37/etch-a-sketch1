
let squareContainer = document.getElementById("grid-container");

function createDivs(){
for (let num = 0; num < (squareInput*squareInput); num++){
    let squareInput = document.createElement("div");

    squareInput.classList.add("sketch");
    squareInput.addEventListener("mouseover", () => {

        squareInput.style.backgroundColor = changeColor();
        let brightness;
            const currentBrightness = squareInput.style.filter;
            
            if(currentBrightness == ""){
                brightness = "brightness(1)";
            }
            else {
                if(currentBrightness === 'brightness(1)') {
                    brightness = 'brightness(0.9)'
                  } else if(currentBrightness === 'brightness(0.9)') {
                    brightness = 'brightness(0.8)'
                  }
                  else if(currentBrightness === 'brightness(0.8)') {
                    brightness = 'brightness(0.7)'
                  }
                  else if(currentBrightness === 'brightness(0.7)') {
                    brightness = 'brightness(0.6)'
                  }
                  else if(currentBrightness === 'brightness(0.6)') {
                    brightness = 'brightness(0.5)'
                  }
                  else if(currentBrightness === 'brightness(0.5)') {
                    brightness = 'brightness(0.4)'
                  }
                  else if(currentBrightness === 'brightness(0.4)') {
                    brightness = 'brightness(0.3)'
                  }
                  else if(currentBrightness === 'brightness(0.3)') {
                    brightness = 'brightness(0.2)'
                  }
                  else if(currentBrightness === 'brightness(0.2)') {
                    brightness = 'brightness(0.1)'
                  }
                  else if(currentBrightness === 'brightness(0.1)') {
                    brightness = 'brightness(0)'
                  }

            }
            squareInput.style.filter = brightness;
        }
    );
    
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

function modifyBrightness(val) {
    let brightness = 1.0;
    brightness = brightness + val;
    brightness = parseInt(brightness, 10);
    $("body_id").style.filter = "brightness(100)";
    return brightness;
}
