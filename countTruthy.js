let arr = [null, 0, 1, 2, undefined, '', false, true]

function countTruthy(array) {
    // NAN
    // 0
    // false
    // ''
    // undefined
    // null
    let answer = 0;

    for (let i=0; i<=array.length; i++) {
        if (array[i] !== NaN)
        if (array[i] !== 0)
        if (array[i] !== '')
        if (array[i] !== false)
        if (array[i] !== undefined)
        if (array[i] !== null)
        answer++;  
    }

    return answer;
}
console.log(countTruthy(arr));



function countTruthyOptimized(array) {
    let answer = 0;
    for (let value of array)
        if (value)  answer++;
    return answer;
}
console.log(countTruthyOptimized(arr))
