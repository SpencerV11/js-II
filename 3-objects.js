// *** OBJECTS *** //

// How can we store related pieces of data?
var name = 'Beth';
var hair = 'blonde';
var email = 'beth@dm.com';
var password = '$ecret';

let user = {
    name: name,
    hair: hair,
    email: email,
    password: password
}
console.log(user.name);
console.log(user["name"])

// Would an array work?

// What is an object? What syntax does it use?

// What can we keep in an object?

let canIReallyDoThat = {
    first: true,
    second: null,
    third: undefined,
    fourth: "Hello",
    fifth: 2,
    sixth: {name: "Bob Ross"},
    seventh: [1, 2, 3],
    eighth: function() {return 5}
}
console.log(canIReallyDoThat.fourth);
console.log(canIReallyDoThat.sixth.name)

// How can we access the items in an object?

// How can we add more data to an object?

canIReallyDoThat.ninth = 12;
canIReallyDoThat.first = false
console.log(canIReallyDoThat)

// METHODS // it is a pattern of putting a function on an object.

// What are functions that are stored in objects called? What syntax do they use?


// How do we write them?

// How do we invoke them?




// NESTED DATA //

// What if we have arrays and objects inside of each other???
//// Simple data types
//// Objects
//// Methods on objects
//// Using a for loop

let myData = {
    name: "Bob Ross",
    favoriteThings: ["Rain Dancing", "Making happy clouds", "giving out friends"]
}
console.log(myData["favoriteThings"][1])
console.log(myData.favoriteThings[1])

for(i = 0; i < myData.favoriteThings.length; i++){
    console.log(myData.favoriteThings[i]);
    //myData.favoriteThings[i] = "Smiling"
}
console.log(myData.favoriteThings);