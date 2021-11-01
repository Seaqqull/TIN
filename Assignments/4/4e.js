let words = "The longest word is.";
let longestWord = findWord(words);

console.log("The longest word among(" + words + "): " + longestWord);

function findWord(words) {
    let splittedWords = words.split(" ");
    let splittedLength = splittedWords.map(word => word.length);

    return splittedWords[splittedLength.indexOf(Math.max(...splittedLength), splittedLength)];
}