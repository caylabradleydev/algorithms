/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let diagonalSum = 0;
    let n = mat.length - 1
    
    for(let i = 0; i < mat.length; i++){
        diagonalSum += mat[i][i] + ((mat[i][n-i]))
    }

    if(mat.length % 2 !== 0){
        diagonalSum -= mat[n / 2][n / 2 ]
    }
    
    return diagonalSum
};
