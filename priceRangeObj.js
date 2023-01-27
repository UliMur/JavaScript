

let priceRangeObject1 = {
    minPrice: 0,
    maxPrice: 50,
    sign: '$',
    hoverUp: 'Cheap'
};
let priceRangeObject2 = {
    minPrice: 51,
    maxPrice: 150,
    sign: '$$',
    hoverUp: 'Moderate'
};
let priceRangeObject3 = {
    minPrice: 151,
    maxPrice: null,
    sign: '$$$',
    hoverUp: 'Pricey'
};

let priceRangeObjects = [
    priceRangeObject1, priceRangeObject2, priceRangeObject3
]

console.log(priceRangeObjects);
