let coins = [25, 10, 5, 2, 1];
let amount = 46;

let receivedCoins = amountToCoins(amount, coins);
console.log("For amount: " + amount + " with given coins(" + coins + ") we get: " + receivedCoins);

function amountToCoins(amount, userCoins) {
    let selectedCoin = userCoins.length - 1;
    let takenCoins = [];

    let sortedCoins = userCoins.sort(function( a , b) {
        return (a > b)? 1 : (a < b)? -1 : 0;
    });

    while(selectedCoin > -1 && amount > 0) {
        if(sortedCoins[selectedCoin] > amount) {
            selectedCoin--;
        }
        else {
            takenCoins.push(sortedCoins[selectedCoin]);
            amount -= sortedCoins[selectedCoin];
        }
    }

    return takenCoins;
}