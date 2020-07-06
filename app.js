const r = 20;
const c = 20;
createGrid(r, c);

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

