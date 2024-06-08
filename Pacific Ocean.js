/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 const dirs = [[0,-1],[0,1],[-1,0],[1,0]]
var pacificAtlantic = function(heights) {
    const [cols,rows] = [heights[0].length,heights.length] 
    const atlantic = new Set()
    const pacific = new Set()
    function dfs(row,col,visit,prevHeight){

        if(row < 0 || row > rows-1 || col < 0 || col > cols-1 || visit.has(`${row},${col}`) || heights[row][col] < prevHeight ){
            return
        }
        visit.add(`${row},${col}`)

        for(const dir of dirs){
            const newX = row+ dir[0]
            const newY = col + dir[1]
            dfs(newX,newY,visit,heights[row][col]);
        }
    }
    for(let i = 0; i < cols; i++){
        atlan = 0;
        dfs(0,i,pacific,heights[0][i])
        atlan = 1;

        dfs(rows-1,i,atlantic,heights[rows-1][i])
    }
    for(let i = 0; i < rows; i++){
        atlan = 0;
        dfs(i,0,pacific,heights[i][0])
        atlan = 1;

        dfs(i,cols-1,atlantic,heights[i][cols-1])
    }
    let results = []

    pacific.forEach((a) => {
        if(atlantic.has(a)){
            results.push(a.split(","))
        }
    })
    return results
};
// 1 1 2 3 1
// 3 2 3 4 2
// 1 3 4 2 1 
// edges of diagonal can flow no matter what 
// 
