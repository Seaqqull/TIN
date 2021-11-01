let word = "webmaster";
let alphaStr = alphabeticalStr(word);

console.log("Alphabetical order(" + word + "): " + alphaStr);

function alphabeticalStr(str) {
    let newStr = [];

    for (let i = 0; i < str.length; i++) {
        let insertPosition = 0;

        for(let j = 0; j < newStr.length; j++) {
            if(str[i] <= newStr[j])
                break;
            insertPosition++;
        }
        newStr.splice(insertPosition, 0, str[i]);
    }

    return newStr.join("");
}