function removeFromArray( arr, el ) {

    for( let i = arr.length - 1; i >= 0; i-- ) {

        if(  arr[i] === el ) {

            arr.splice( i, 1 );

        }

    }

}

// Calculates the Euclidean Distance between 2 Points
function heuristic( a, b ) {

    let x = Math.pow((a.row - b.row), 2);
    let y = Math.pow((a.col - b.col), 2);
    let z = x + y;
    return Math.sqrt(z);

}

async function aStar() {

    if( startNode === null || endNode === null ) {
        throw "Define a start and end node first...";
    }

    let openSet = [];
    let closedSet = [];

    openSet.push(startNode);

    // Runs until the openSet is empty or the end node was found
    while( openSet.length !== 0 ) {

        let winner = 0;

        for( let i = 0; i < openSet.length; i++ ) {

            if( openSet[i].f < openSet[winner].f ) {
                winner = i;
            }

        }

        let current = openSet[winner];

        // Check if we have found the end node
        if( current === endNode ) {

            // Find Path
            let temp = current;
            path.push(temp);

            while( temp.previous ) {

                path.push(temp.previous);
                temp = temp.previous;

            }

            // Trace the path
            for( let i = 1; i < path.length; i++ ) {

                if( path[i] !== startNode ) {

                    await setPathStyle(path[i]);

                }

            }

            console.log('Done!');
            break;

        }

        removeFromArray(openSet, current);

        if( current !== startNode ) {

            await setEvaluatedStyle(current);

        }

        closedSet.push(current);

        let neighbors = current.neighbors;

        for( let i = 0; i < neighbors.length; i++ ) {

            let neighbor = neighbors[i];

            // Check if the neighbor is already in the closed set
            if( closedSet.indexOf(neighbor) === -1 && !neighbor.barrier) {

                let tempG = current.g + 1;

                if( openSet.includes( neighbor ) ) {

                    if( tempG < neighbor.g ) {

                        neighbor.g = tempG;

                    }

                } else {

                    neighbor.g = tempG;
                    openSet.push( neighbor );

                }

                neighbor.h = heuristic( neighbor, endNode );
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.previous = current;

            }

        }

    }

}