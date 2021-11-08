let ownObject = {
    name: "My object",
    value: 5,
    items: [
        "Knife",
        1,
        2.0
    ]
};

console.log("Object properties:")
printObject(ownObject);


function printObject(obj) {
    Object.keys(obj).forEach((prop)=> console.log("Property [" + prop + "] has type => " + typeof(obj[prop])));
}