const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
    const newIndex = index + offset;
    if (newIndex < 0 || newIndex >= array.length) {
        console.error('Invalid offset');
        return;
    } 
    const arrayCopy = [...array];
    const element = arrayCopy.splice(index, 1)[0];
    arrayCopy.splice(newIndex, 0, element);

    return arrayCopy;
} 