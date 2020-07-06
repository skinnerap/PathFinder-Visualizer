// Global variables
let startNode = null;
let endNode = null;

// Sets a start node in a block based on a block location
function createStartNode( row, col ) {

    if( startNode !== null ) {

        if( row.toString() + '-' + col.toString() === startNode.id ) {

            return;

        } else {

            document.getElementById(startNode.id).classList.remove('start');

        }

    }

    let block = grid[row][col];

    document.getElementById( block.id ).classList.add('start');

    startNode = block;

    startNode.g = 0;

}

// Sets an end node in a block based on a block location
function createEndNode( row, col ) {

    if( endNode !== null ) {

        if( row.toString() + '-' + col.toString() === endNode.id ) {

            return;

        } else {

            document.getElementById(endNode.id).classList.remove('end');

        }

    }

    let block = grid[row][col];

    document.getElementById( block.id ).classList.add('end');

    endNode = block;

}

function createBarrierNode( row, col ) {

    let id = row.toString() + '-' + col.toString();

    let block = grid[row][col];
    block.barrier = true;

    document.getElementById( id ).classList.add('barrier');

}

const aStarBtn = document.querySelector('.aStar');
aStarBtn.addEventListener('click', () => {
    aStar();
});



function addStart(div) {
    let id = (div.id).split('-');
    let i = parseInt(id[0]);
    let j = parseInt(id[1]);
    console.log(grid[i][j]);
    // If no start node exists
    if(startNode === null) {
        div.classList.add('start');
        startNode = grid[i][j];
        startNode.g = 0;
        // If clicked block is currently the end node
    } else if(grid[i][j] === endNode) {
        document.getElementById(endNode.id).classList.remove('end');
        endNode = null;
        document.getElementById(startNode.id).classList.remove('start');
        div.classList.add('start');
        startNode = grid[i][j];
        startNode.g = 0;
        // If clicked block is currently the start node
    } else if(grid[i][j] === startNode) {
        div.classList.remove('start');
        startNode = null;
        // If clicked block is currently a barrier node
    } else if(grid[i][j].barrier === true) {
        grid[i][j].barrier = false;
        document.getElementById(div.id).classList.remove('barrier');
        div.classList.add('start');
        startNode = grid[i][j];
        startNode.g = 0;
        // Switch start node to this block
    } else {
        document.getElementById(startNode.id).classList.remove('start');
        div.classList.add('start');
        startNode = grid[i][j];
        startNode.g = 0;
    }
}

function addEnd(div) {
    let id = (div.id).split('-');
    let i = parseInt(id[0]);
    let j = parseInt(id[1]);
    console.log(grid[i][j]);
    if (endNode === null) {
        div.classList.add('end');
        endNode = grid[i][j];
    } else if (grid[i][j] === startNode) {
        document.getElementById(startNode.id).classList.remove('start');
        document.getElementById(endNode.id).classList.remove('end');
        startNode = null;
        div.classList.add('end');
        endNode = grid[i][j];
    } else if (grid[i][j] === endNode) {
        div.classList.remove('end');
        endNode = null;
    } else if (grid[i][j].barrier === true) {
        grid[i][j].barrier = false;
        document.getElementById(div.id).classList.remove('barrier');
        div.classList.add('end');
        endNode = grid[i][j];
    } else {
        document.getElementById(endNode.id).classList.remove('end');
        div.classList.add('end');
        endNode = grid[i][j];
    }
}

function addBarrier(div) {
    let id = (div.id).split('-');
    let i = parseInt(id[0]);
    let j = parseInt(id[1]);
    console.log(grid[i][j]);
    if(grid[i][j] === startNode) {
        document.getElementById(startNode.id).classList.remove('start');
        startNode = null;
        div.classList.add('barrier');
        grid[i][j].barrier = true;
    } else if(grid[i][j] === endNode) {
        document.getElementById(endNode.id).classList.remove('end');
        endNode = null;
        div.classList.add('barrier');
        grid[i][j].barrier = true;
    } else if(grid[i][j].barrier === true) {
        grid[i][j].barrier = false;
        document.getElementById(div.id).classList.remove('barrier');
    } else {
        div.classList.add('barrier');
        grid[i][j].barrier = true;
    }
}


/* LOGIC TO USE IN REFERENCE - REFACTOR INCOMING!
if(e.altKey) {
            div.removeEventListener('click', )
            div.addEventListener('click', () => {
                let id = (div.id).split('-');
                let i = parseInt(id[0]);
                let j = parseInt(id[1]);
                console.log(grid[i][j]);
                if (endNode === null) {
                    div.classList.add('end');
                    endNode = grid[i][j];
                } else if (grid[i][j] === startNode) {
                    document.getElementById(startNode.id).classList.remove('start');
                    startNode = null;
                    div.classList.add('end');
                    endNode = grid[i][j];
                } else if (grid[i][j] === endNode) {
                    div.classList.remove('end');
                    endNode = null;
                } else if (grid[i][j].barrier === true) {
                    grid[i][j].barrier = false;
                    document.getElementById(div.id).classList.remove('barrier');
                    div.classList.add('end');
                    endNode = grid[i][j];
                } else {
                    document.getElementById(endNode.id).classList.remove('end');
                    div.classList.add('end');
                    endNode = grid[i][j];
                }
            });
        } else if(e.ctrlKey) {
            div.addEventListener('click', () => {
                let id = (div.id).split('-');
                let i = parseInt(id[0]);
                let j = parseInt(id[1]);
                console.log(grid[i][j]);
                if(grid[i][j] === startNode) {
                    document.getElementById(startNode.id).classList.remove('start');
                    startNode = null;
                    div.classList.add('barrier');
                    grid[i][j].barrier = true;
                } else if(grid[i][j] === endNode) {
                    document.getElementById(endNode.id).classList.remove('end');
                    endNode = null;
                    div.classList.add('barrier');
                    grid[i][j].barrier = true;
                } else if(grid[i][j].barrier === true) {
                    grid[i][j].barrier = false;
                    document.getElementById(div.id).classList.remove('barrier');
                    div.classList.add('end');
                } else {
                    div.classList.add('barrier');
                    grid[i][j].barrier = true;
                }
            });
        } else if(e.metaKey) {
            div.addEventListener('click', () => {
                let id = (div.id).split('-');
                let i = parseInt(id[0]);
                let j = parseInt(id[1]);
                console.log(grid[i][j]);
                // If no start node exists
                if(startNode === null) {
                    div.classList.add('start');
                    startNode = grid[i][j];
                    startNode.g = 0;
                    // If clicked block is currently the end node
                } else if(grid[i][j] === endNode) {
                    document.getElementById(endNode.id).classList.remove('end');
                    endNode = null;
                    div.classList.add('start');
                    startNode = grid[i][j];
                    startNode.g = 0;
                    // If clicked block is currently the start node
                } else if(grid[i][j] === startNode) {
                    div.classList.remove('start');
                    startNode = null;
                    // If clicked block is currently a barrier node
                } else if(grid[i][j].barrier === true) {
                    grid[i][j].barrier = false;
                    document.getElementById(div.id).classList.remove('barrier');
                    div.classList.add('start');
                    startNode = grid[i][j];
                    startNode.g = 0;
                    // Switch start node to this block
                } else {
                    document.getElementById(startNode.id).classList.remove('start');
                    div.classList.add('start');
                    startNode = grid[i][j];
                    startNode.g = 0;
                }
            });
        }
 */