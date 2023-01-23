
//street
//city
//zipcode
// showAddress (address)

let address = {
    street: "33 Thomas Mullholand Drive",
    city: "Toronto",
    zipcode: "M5V4B3"
};
 
// function showAddress(addressObject) {
//     return Object.entries(addressObject);
// }
// console.log(showAddress(address));


function showAddress2(addressObj) {
    for (let key in addressObj)
        console.log(key, addressObj[key]);
}
showAddress2(address);