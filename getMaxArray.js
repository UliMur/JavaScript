const numbers = [1, 2, 3, 4];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
    if (array.lenth === 0) return undefined;

    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function getMax2(array) {
    return array.reduce((a, b) => a > b ? a : b);
}
const max2 = getMax2(numbers);
console.log(max2);