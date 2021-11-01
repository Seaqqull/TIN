let ownVar = "aaa";
let varType = getType(ownVar);

console.log("Type of (" + ownVar + "): " + varType);

function getType(userVar) {
    return typeof(userVar);
}