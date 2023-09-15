const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const printSavedValue = document.getElementById("printSavedValue");

const savedValue = localStorage.getItem("savedValue");
if (savedValue !== null) {
    printSavedValue.textContent = `Valeur sauvegardée: ${savedValue}`;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = textInput.value.trim();

    if (inputValue) {
        localStorage.setItem('savedValue', inputValue);
        printSavedValue.textContent = `Valeur sauvegardée: ${inputValue}`;
        textInput.value = '';
    } else {
        alert("Veuillez saisir une valeur valide!")
    }
});