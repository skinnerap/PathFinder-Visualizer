// Get User Heuristic Function Choice First
let hChoice = 'manhattanDistance';
let hChoices = document.getElementsByName('h-choice');
for( let c of hChoices ) {

    c.addEventListener('click', () => {
        hChoice = c.value;
    });

}
let r = 50;
let c = 50;

let styleAccessBlock = document.querySelectorAll('.block');
let styleAccessRow = document.getElementsByClassName('row');
if(window.outerWidth < 760) {

    for(let elt of styleAccessBlock) {
        elt.style.maxHeight = '1vw';
    }
    for(let elt of styleAccessRow) {
        elt.style.maxHeight = '1vw';
    }
    r = 30;
    c = 16;
}
if(window.outerWidth >= 760 && window.outerWidth < 780) {
    r = 35;
    c = 30;
}
let w = window.outerWidth;
let h = window.outerHeight;

createGrid(r, c);

if(w > 567 && w < 760 && h < 420 && h > 319) {
    // fix
    for(let elt of styleAccessBlock) {
        elt.style.maxHeight = '2vw';
        elt.style.maxWidth = '2vw';
    }
    for(let elt of styleAccessRow) {
        elt.style.maxHeight = '2vw';
    }
    c = 22;
    // 1) Set the container's html to an empty string
    let con = document.querySelector('.con');
    con.innerHTML = '';
    // 2) Set global variable 'path' to an empty array
    path = [];
    // 3) Set the global variable 'grid' to an empty array
    grid = [];
    // 3) Regenerate the grid
    createGrid(r,c);
    // 4) Reset event listeners
    const divs = document.querySelectorAll('.block');
    divs.forEach(div => {
        div.addEventListener('click', () => {
            let choices = document.getElementsByName('node-choice');
            let nodeChoice = '';

            for(let choice of choices) {
                if(choice.checked === true) {
                    nodeChoice = choice.value;
                }
            }

            if(nodeChoice === 'applyStart') {
                addStart(div);
            } else if(nodeChoice === 'applyEnd') {
                addEnd(div);
            } else if(nodeChoice === 'applyBarrier') {
                addBarrier(div);
            }
        });
    });
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    // 1) Set the container's html to an empty string
    let con = document.querySelector('.con');
    con.innerHTML = '';
    // 2) Set global variable 'path' to an empty array
    path = [];
    // 3) Set the global variable 'grid' to an empty array
    grid = [];
    // 3) Regenerate the grid
    createGrid(r,c);
    // 4) Reset event listeners
    const divs = document.querySelectorAll('.block');
    divs.forEach(div => {
        div.addEventListener('click', () => {
            let choices = document.getElementsByName('node-choice');
            let nodeChoice = '';

            for(let choice of choices) {
                if(choice.checked === true) {
                    nodeChoice = choice.value;
                }
            }

            if(nodeChoice === 'applyStart') {
                addStart(div);
            } else if(nodeChoice === 'applyEnd') {
                addEnd(div);
            } else if(nodeChoice === 'applyBarrier') {
                addBarrier(div);
            }
        });
    });
});

const divs = document.querySelectorAll('.block');
divs.forEach(div => {
    div.addEventListener('click', () => {
        let choices = document.getElementsByName('node-choice');
        let nodeChoice = '';

        for(let choice of choices) {
            if(choice.checked === true) {
                nodeChoice = choice.value;
            }
        }

        if(nodeChoice === 'applyStart') {
            addStart(div);
        } else if(nodeChoice === 'applyEnd') {
            addEnd(div);
        } else if(nodeChoice === 'applyBarrier') {
            addBarrier(div);
        }
    });
});

const aStarBtn = document.querySelector('.aStar');
aStarBtn.addEventListener('click', () => {
    aStar();
});

const dijkBtn = document.querySelector('.dijkstra');
dijkBtn.addEventListener("click", () => {
    dijkstra();
});

const bfsBtn = document.querySelector('.bfs');
bfsBtn.addEventListener('click', () => {
    bfs();
});

