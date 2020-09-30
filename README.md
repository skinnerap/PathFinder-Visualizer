# PathFinder-Visualizer

This application shows popular path-finding algorithms visually. Users select a start, end, and optional barrier nodes and then select one of the algorithms to visually digest exactly how the different algorithms work.

The grid itself is generated via javascript by inserting div elements into arrays that serve as rows. This is how I am able to track the x and y coordinate positions of all the nodes (divs) on screen.

This algorithms are popular pathfinding algorithms designed to find the most efficient path from a starting node to and ending node. Certain algorithms work better in different situations. For example, the Best First Search is going to take the most greedy approach. BFS will try the absolute most optimal path, and then the closest path to that if said path fails, only to continue until the end is found or all options are exhausted. This works really well when the solution is close to the absolute most optimal path (a path with no barriers in the way). Djikstra's algorithm is the complete opposite approach. In Djikstra's we start the search by exploring paths that are nearest to our starting node, not even caring to estimate where the ending node might exist. This approach is generally considered to be the slowest option in the vast majority of cases.

Algorithms that attempt to estimate the location of the ending node before begining the actual search do so by using a heuristic function. There are different heuristic algorithms, but they all attempt to estimate the distance from the starting node to the ending node via algebra.

Reset the grid after each search, I will add a feature to save node placements after searchs to reset and run different algorithms on the same grid setup.

Enjoy!
