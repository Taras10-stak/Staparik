let liquidHeight = 0;
let liquidIncrement = 50;
let cupHeight = 300;

function addLiquid() {
    if (liquidHeight < cupHeight) {
        liquidHeight += liquidIncrement;
        updateLiquid();
    }
}

function removeLiquid() {
    if (liquidHeight >= liquidIncrement) {
        liquidHeight -= liquidIncrement;
        updateLiquid();
    }
}

function updateLiquid() {
    let liquidElement = document.getElementById('liquid');
    let mlElement = document.getElementById('ml');
    liquidElement.style.height = `${liquidHeight}px`;
    mlElement.textContent = `${liquidHeight} мл`;
}




