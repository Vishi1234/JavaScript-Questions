const colorCodeContainer = document.getElementById("colorcode")
const optionsContainer = document.getElementById("options")
const scoreContainer = document.getElementById("score")
let randomColor = null;
let score=0;

function generateRandomNumberBetween(min, max) {
    return min + Math.floor(Math.random() * (max-min +1))
}

function generateRandomColorRGB() {
    let red = generateRandomNumberBetween(0,255)
    let green = generateRandomNumberBetween(0,255)
    let blue = generateRandomNumberBetween(0,255)
    return `rgb(${red}, ${green}, ${blue})`
}

function incrementScore() {
    score +=1
    scoreContainer.innerText = score
}
   
function validateResult(el) {
    const selectedColor = el.target.style.backgroundColor
    if (selectedColor === randomColor) {
        incrementScore();
    }
    else {
        score = 0;
    }
    window.localStorage.setItem("score", score)
    startGame()
}

function startGame() {
    score = Number(window.localStorage.getItem("score")) ?? 0;
    scoreContainer.innerText = score;
    optionsContainer.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    const ansIndex = generateRandomNumberBetween(0, 5);


    for (let i = 0; i < 6; i++) {
        const div = document.createElement("div");
        div.addEventListener("click", validateResult);
        div.style.backgroundColor = 
          i === ansIndex ? randomColor : generateRandomColorRGB();
        div.style.width = '100px'; 
        div.style.height = '100px'; 
        div.style.display = 'inline-block';
        div.style.margin = '5px';
        div.style.border = '1px solid #000'; 
        optionsContainer.append(div);
    }
}

window.addEventListener("load", () => startGame())
