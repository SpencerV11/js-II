// *** ARRAYS *** //
// How can we store a list?
const first = 'buy groceries';
const second = 'take out trash';
const third = 'wash laundry';
//what is an array
//contain a list of items
//ordered, and accessible by numbers
let toDoList = [first, second, third];

console.log(toDoList);
console.log(toDoList[2]);
console.log(toDoList.length);
let index = 1;
console.log(toDoList[index])
console.log(toDoList[toDoList.length -1])
console.log(typeof toDoList.length)

// What is an array? What syntax does it use?

// What can we keep in an array?

let canIReallyDoThat = [function(){return 5},true, null, undefined, "string", 4, {name: "Spencer"}, [2, [3, 3, 4]]]
console.log(canIReallyDoThat)

// How can we access the items in an array?
let nestedArray = [1, [2,[3]]]
console.log(nestedArray[1][1])
// How can we access the end of an array?

// METHODS //
const methodsExample = [1, 2, 3]
methodsExample.push(4)
console.log(methodsExample);
// push

methodsExample.pop();
console.log(methodsExample);
// pop
methodsExample.unshift(0);
console.log(methodsExample);
// unshift
methodsExample.shift(0);
console.log(methodsExample);
// shift
//let copy = methodsExample.slice(0, 2);
//console.log(copy)
// slice
let copy1 = methodsExample.splice(0, 1, "Billy");
console.log(copy1);
console.log(methodsExample);
// splice
