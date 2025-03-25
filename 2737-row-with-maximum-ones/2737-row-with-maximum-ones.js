/**
 * @param {number[][]} mat
 * @return {number[]}
 */

// given array contains only 0s and 1s
var rowAndMaximumOnes = function(mat) {
    let position = [0,0]; //output array of row and number of ones
    let currentOnesCount = 0

    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            currentOnesCount += mat[i][j];
        }

        if(currentOnesCount > position[1]) position = [i, currentOnesCount]
        currentOnesCount = 0
    }

    return position
};