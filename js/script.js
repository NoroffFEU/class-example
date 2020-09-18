import Block from "./block.js";

const container = document.querySelector(".container");

const randomNumber = getRandomInt(7);
console.log(randomNumber);

for (let i = 1; i <= 50; i++) {
    let cssClass = "";

    if (i % randomNumber === 0) {
        cssClass = "highlight";
    }

    const newBlock = new Block(i, 75, cssClass);

    const newHtml = newBlock.draw();

    container.innerHTML += newHtml;
}

function getRandomInt(max) {
    return 2 + Math.floor(Math.random() * Math.floor(max));
}
