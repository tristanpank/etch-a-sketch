function main() {
    createDivs(16);
    const squares = document.getElementsByClassName('square');
    Array.from(squares).forEach(element => element.addEventListener('mouseover', changeBackground));
    Array.from(squares).forEach(element => element.addEventListener('touchstart', changeBackground));
}

function changeBackground() {
    this.style.cssText = 'background-color: white';
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