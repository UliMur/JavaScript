const numbers = [1, 2, 3, 4];

const count = countOccurrences(numbers, 1);
console.log(count);
function countOccurrences(array, searchElement) {
    let count = 0;
    for (let element of array) {
        if (element === searchElement) {
            count++;
        }
    }
    return count;
}

const count2 = countOccurrences2(numbers, 1);
console.log(count2); 
function countOccurrences2(array, searchElement) {
    return array.reduce((count, element) => {
        if (element === searchElement) {
            count++;
        }
        return count;
    }, 0);
}