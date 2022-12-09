function sum(limit) {
    let suma=0;
    
    for (let number=1; number<=10; number++) {
        if (number % 3 === 0 || number % 5 ===0) {
            suma += number;
        }
    }
    return suma;
}
console.log(sum(10));