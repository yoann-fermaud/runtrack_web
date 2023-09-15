function sum(number1, number2) {
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        return number1 + number2;
    } else {
        console.log("Veuillez saisir une entrée valide!");
    }
}

const stringLength = (string) => {
    if (typeof string === 'string' && string.length > 0) {
        return string.length;
    } else {
        console.log("Veuillez saisir une entrée valide!");
    }
}

let sumResult = sum(4, 10);
let stringResult = stringLength("hello")

console.log("Sum: ", sumResult);
console.log("String length: ", stringResult);
