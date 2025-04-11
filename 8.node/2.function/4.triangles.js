const  rows = 10;
function leftTriangle() {
    let currentRow = 1;
    while (currentRow <= rows) {
        let stars = "";
        let starCount = 1;
        while (starCount <= currentRow) {
            stars += "*";
            starCount++;
        }
        console.log(stars);
        currentRow++;
    }
}

function leftInvertTriangle() {
    let currentRow = 10;
    while (currentRow <= rows) {
        let stars = "****************";
        let starCount = 1;
        while (starCount <= currentRow) {
            stars -= "*";
            starCount++;
        }
        console.log(stars);
        currentRow--;
    }
}


function rightTriangle() {
}

function rightInvertTriangle() {
}

function doublesideTriangle() {
}

function doublesideInvertTriangle() {
}

leftTriangle();
console.log();
leftInvertTriangle();
console.log();
rightTriangle();
console.log();
rightInvertTriangle();
console.log();
doublesideTriangle();
console.log();
doublesideInvertTriangle();
console.log();
