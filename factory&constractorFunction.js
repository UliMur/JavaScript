// Factory function

function address(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
let showAdress = address('a', 'b', 'c');
console.log(showAdress)

//Constructor function

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let ShowAddress1 = new Address('a', 'b', 'c');
console.log(ShowAddress1)