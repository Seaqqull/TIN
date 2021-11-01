let word = "aassaa";
let isPalindrome = isPal(word);

console.log("Does word (" + word + ") palindrome: " + isPalindrome);

function isPal(str) {
    let l = str.length;

    for (let i = 0; i < l/2; i++) {
        if (str[i] !== str[l - 1 - i]) {
            return false;
        }
    }
    return true;
}