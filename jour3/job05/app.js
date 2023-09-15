const myObject = {
    name: "John Doe",
    age: 21,
    city: "Marseille",

    showBiography: function() {
        if (typeof this.name === 'string' && typeof this.age === 'number' && typeof this.city === 'string') {
            return `${this.name} is ${this.age} years old and lives in ${this.city}`;
        }
    }
};

console.log(myObject.showBiography());