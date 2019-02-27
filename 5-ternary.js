// *** TERNARY *** //

let name = "Bob Ross";

// if(name !== "Bob Ross"){
//     name = "Bob Ross"
// } else {
//     name = "Best man"
// }
name !== "Bob Ross" ? name = "Bob Ross" : name = "BestMan"

console.log(name);

var x = name === `Bob Ross` ? 1000000 : -10;
console.log(x)

// Let's review if/else statements

// What if we could write the same thing, but with less typing?

// How do we use an if/else statement to assign a variable?

// How do we do it with a ternary?
x = -1
var thing = x > 0 ? "Its positive" : x === 0 ? "its zero" : "its negative"
// false: false: "its negative"
console.log(x);

// Can we nest ternaries?