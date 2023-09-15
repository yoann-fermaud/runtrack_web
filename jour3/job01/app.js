function sum() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)) {
        let addition = number1 + number2;
        let subtraction = number1 - number2;
        let multiplication = number1 * number2;
        let division = number2 !== 0 ? number1 / number2 : "Divison par 0 impossible!";
        
        document.getElementById("sum_result").innerHTML = `
            Addition : ${addition}<br>
            Soustraction : ${subtraction}<br>
            Multiplication : ${multiplication}<br>
            Division : ${division}`;
    } else {
        alert("Veuillez saisir une entrée correcte!");
    }
}

function concatenate() {
    let string1 = document.getElementById("string1").value;
    let string2 = document.getElementById("string2").value;

    if (string1 !== "" && string2 !== "") {
        let concatenateResult = string1 + string2;

        document.getElementById("concatenate_result").innerHTML = `
            Concaténation: ${concatenateResult}`;
    } else {
        alert("Veuillez saisir une entrée non vide!");
    }
}