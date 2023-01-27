// Write a function called fiveLettersWordsCount(array) that consume an array of strings (words)
// The function should return a result -
// quantity of words that contain exactly 5 chars

function fiveLettersWordsCount(array) {
    let answer = 0;
    for (let value of array)
        if (value.length === 5) answer++;
    return answer;

}
let array1 = ['back', 'kitte', 'lake', 'fenge'];
fiveLettersWordsCount(array1);
console.log(fiveLettersWordsCount(array1));