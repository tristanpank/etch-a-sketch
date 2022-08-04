let currGridNumber = 16;

function main() {
    createDivs(16);
    addFunctionality();
    const gridChanger = document.getElementById('grid-changer');
    gridChanger.addEventListener('click', changeGrid);
    const clear = document.getElementById('clear-button');
    clear.addEventListener('click', resetGrid);
}

function changeBackground() {
    this.style.cssText = 'background-color: black';
}

function changeGrid() {
    do {
        currGridNumber = prompt();
    }
    while (currGridNumber>100 || currGridNumber<1);
    resetGrid();
}

function resetGrid() {
    const rows = document.getElementsByClassName('row');
    Array.from(rows).forEach(element => element.remove());
    createDivs(currGridNumber);
    addFunctionality();
}

function addFunctionality() {
    const squares = document.getElementsByClassName('square');
    Array.from(squares).forEach(element => element.addEventListener('mouseover', changeBackground));
    Array.from(squares).forEach(element => element.addEventListener('touchstart', changeBackground));
}

function createDivs(rowNums) {
    let container = document.getElementById('grid-container');
    for (let i = 0; i < rowNums; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < rowNums; j++) {
            let square = document.createElement('div');
            square.className = "square";
            // square.style.cssText = squareStyles;
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

main();