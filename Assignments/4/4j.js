let arr = [ 1, 3, 7, 10, 23, 35 ];
let x = 10;

let result = binarySearch(arr, x);
console.log(result);

function binarySearch(userArr, x)
{
    let l = 0, r = userArr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (userArr[m] == x)
            return m;

        if (userArr[m] < x)
            l = m + 1;
        else
            r = m - 1;
    }
    return -1;
}