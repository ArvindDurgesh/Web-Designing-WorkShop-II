const heading = document.querySelector('h2');
const inputField = document.getElementById('fill');
const mainContainer = document.querySelector('.main');
const textPara = document.querySelector('p');

const btnBackground = document.getElementById('background');
const btnFont = document.getElementById('font');
const btnHide = document.getElementById('hide');
const btnReset = document.getElementById('reset');

function textChange() {
    if (inputField.value.trim() !== "") {
        heading.innerText = inputField.value;
        inputField.value = "";
    } else {
        alert("Please enter some text first!");
    }
}

btnBackground.addEventListener('click', () => {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
    mainContainer.style.backgroundColor = randomColor;
});

let currentFontSize = 24;
btnFont.addEventListener('click', () => {
    currentFontSize += 5;
    heading.style.fontSize = currentFontSize + "px";
});

btnHide.addEventListener('click', () => {
    if (textPara.style.display === "none") {
        textPara.style.display = "block";
    } else {
        textPara.style.display = "none";
    }
});

btnReset.addEventListener('click', () => {
    heading.innerText = "Welcome to JavaScript";
    heading.style.fontSize = "24px";
    currentFontSize = 24;
    mainContainer.style.backgroundColor = "white";
    textPara.style.display = "block";
    inputField.value = "";
});