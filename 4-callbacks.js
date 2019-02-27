// *** CALLBACKS *** //

// What datatypes can we pass into a function?

function example(callBack, name) {
  console.log(callBack(name));
}
function helloMachine(name){
  return `Hello ${name}`
}

  example(helloMachine, "Bip")

function doubler(num){
  return num * 2
}

let nums = [1, 2, 3, 4, 5]

function modifier(cb, array) {
  for(let i = 0; i < array.length; i++){
    array[i] = cb(array[i])
  }
  return array
}

console.log(modifier(doubler, nums))

function allPeopleAreBob(){
  return "Bob Ross"
}

let names = ["Todd", "Tiny Tim", "Helga", "Josh"]



// What is a callback?

// Can we invoke a callback?

// Why on earth would we do this madness?

//// Dry code

//// Higher order functions that already exist

//// Asynchronous processes

//// Event listeners