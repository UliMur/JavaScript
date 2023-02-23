const numbers = arrayFromRange(-1, 4);
console.log(numbers);
// function arrayFromRange(min, max) {
//     let array = [];
//     for (let i = min; i <= max; i++) {
//         array.push(i);
//     }
//     return array;

// }
function arrayFromRange(min, max) {
    let array = [];
    for (let i = max; i >= min; i--) {
        array.push(i);
    }
    return array;
}