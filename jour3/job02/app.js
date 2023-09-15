let list = [1, 2, 3, 4];

let newElementBeginning = 0;
let addNewElementBeginning  = [newElementBeginning, ...list];

let newElementEnd = 5;
let addNewElementEnd = [...list, newElementEnd];

let delFirstElement = list.slice(1);

let lastElement = list[list.length - 1];

console.log("Default list: ", list);
console.log("Adding a new element at the beginning: ", addNewElementBeginning );
console.log("Adding a new element at the end: ", addNewElementEnd);
console.log("Deleting the first element: ", delFirstElement);
console.log("Last element of the list: ", lastElement);