// Dati
const userKm = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log(userKm, typeof userKm);
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge, typeof userAge);
const number = 0.21;
console.log(number, typeof number);

// Logica
let product = userKm * number;
console.log(product, typeof product);


if (userAge < 18) {
    product = product - (product * 20 / 100);
} else if (userAge > 65) {
    product = product - (product * 40 / 100);
} else {
    product
}

let p = product.toFixed(2);

console.log(p, typeof p);



