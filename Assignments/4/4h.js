let varType = getMinMax([1, 7, 3, 4, 5]);

console.log("Values: " + JSON.stringify(varType));

function getMinMax(userArr) {
    var orderedArray = userArr.sort(function( a , b){
        return (a > b)? 1 : (a < b)? -1 : 0;
    });

    return {
        min: ((orderedArray.length > 1)? orderedArray[1] : orderedArray[0]),
        max: ((orderedArray.length > 1)? orderedArray[orderedArray.length - 2] : orderedArray[orderedArray.length - 1])
    };
}