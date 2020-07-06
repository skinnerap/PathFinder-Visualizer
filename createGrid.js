// Global data structure to store all blocks on the grid
let grid = [];
let path = [];

// Block Constructor
function Block( row, col, f, g, h) {

    this.row = row;
    this.col = col;
    this.id = (this.row).toString() + "-" + (this.col).toString();

    // Used to store the previous block for path tracing
    this.previous = null;

    // Used to define if a block is a barrier node - default to false
    this.barrier = false;

    // Used to calculate path-finding algorithm properties
    this.f = f;
    this.g = g;
    this.h = h;

    // Stores the neighboring blocks to this block
    this.neighbors = [];

    // Adds neighboring blocks to the neighbors array of this block
    this.addNeighbors = function() {

        let i = this.row;
        let j = this.col;

        if( i < grid[0].length - 1) {
            this.neighbors.push(grid[i+1][j]);
        }
        if( i > 0 ) {
            this.neighbors.push(grid[i-1][j]);
        }
        if( j < grid.length - 1 ) {
            this.neighbors.push(grid[i][j+1]);
        }
        if( j > 0 ) {
            this.neighbors.push(grid[i][j-1]);
        }

    }

}

// Creates a Grid of Blocks
function createGrid( rows, cols ) {

    let html = '';
    const con = document.querySelector('.con');

    con.style.maxWidth = '80%';

    // Get height and width for each block on the DOM
    //let width = con.clientWidth / cols;
    //let height = window.innerHeight / rows;
    let width, height;
    width = height = 25.6;

    if(window.innerHeight > window.innerWidth) {

        //height = height / 2;

    }

    // Create and Store the Grid
    for( let i = 0; i < rows; i++ ) {

        grid[i] = [];
        let rowHtml = '';
        let rowConHtml = `<div class='row' id='${i}'></div>`;
        con.innerHTML += rowConHtml;
        let rowCon = document.getElementById(i.toString());

        for( let j=0; j < cols; j++ ) {

            let block = new Block(i, j);
            grid[i].push(block);
            rowHtml = `<div class='block' id=${block.id}>&nbsp</div>`
            rowCon.innerHTML += rowHtml;

        }

    }

    // Add each block's neighbors
    for( let i = 0; i < rows; i++ ) {

        for( let j = 0; j < cols; j++ ) {

            grid[i][j].addNeighbors();

        }

    }

    // Resize the grid blocks based on DOM size
    for( let i = 0; i < rows; i++ ) {
        for(let j = 0; j < cols; j++) {

            let div = document.getElementById(grid[i][j].id);
            div.style.height = height.toString() + 'px';
            div.style.width = width.toString() + 'px';

        }

    }

}

// Sleep function to slow down algorithms and show visualization
function sleep( timeout ) {

    return new Promise(resolve => setTimeout(resolve, timeout));

}

// Sets a path's element's style to show path visualization
async function setPathStyle( el ) {

    await sleep(50);
    document.getElementById(el.id).classList.add('path');

}

async function setEvaluatedStyle( el ) {

    await sleep(10);
    document.getElementById(el.id).classList.add('evaluated');

}