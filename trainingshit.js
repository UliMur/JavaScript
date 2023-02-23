const number = [1, -1, 2, 3];
const items = number
    .filter(value => value >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);

const numbers = [2, 4, 6, 8, 10];
const doubledNumbers = numbers.map(function(n) {
    return n * 2;
});
console.log(doubledNumbers);


const names = ["john", "jane", "jim", "jack"];
const uppercasedNames = names.map(function(name) {
    return name.toUpperCase();
});
console.log(uppercasedNames);


const products = [
    { id: 1, name: "product 1", price: 10 },
    { id: 2, name: "product 2", price: 20 },
    { id: 3, name: "product 3", price: 30 },
    { id: 4, name: "product 4", price: 40 }
];
const simplifiedProducts = products.map(function (product) {
    return {
        name: product.name,
        price: product.price
    };
});

console.log(simplifiedProducts);

const numberss = [1, -1, 2, 3];

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = numberss.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);