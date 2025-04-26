/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    let currentWealth = 0;

    for(let i = 0; i < accounts.length; i++){
        for(let j = 0; j< accounts[i].length; j++){
            currentWealth += accounts[i][j] 
        }

        if(currentWealth > maxWealth) maxWealth = currentWealth
        currentWealth = 0
    }
    
    return maxWealth
};