// this is a javascript comment
// javascript console - Hello World
// "console.log" is used to print out values or provide outputs in javascript console.
// console.log("Hello world")
// console.log("My name is olatunde")
// console.log("My name is regina")
// console.log('This class is fun')


// Data types in javascript

// Strings
let str = "this is a string";
let str2 = 'this is a string';

// Integers - Integers are numbers
let int = 7;

// Booleans - Booleans are basicaly true/false
let rich = true
let broke = false


// Floats - This are decimal numbers
let cgpa = 3.50

// Arrays - is a way of storing multiple values in javascript
let colors = ["blue", "yellow", "red"]
let food = ['rice', 'beans', 'yam', 'bread']
// index      0        1       2       3

// console.log(food[3])

// array length - to check the number of items in an array.
// console.log(colors.length)
// console.log(food.length)


// console.log(colors)
// // array push - to add an item to the array
// colors.push('green')
// colors.push('green')
// colors.push('green')
// colors.push('green')
// colors.push('green')
// colors.push('green')
// console.log(colors)
// console.log(colors.length)

// // array pop - to remove the last item in an array
// console.log(colors)
// colors.pop()
// console.log(colors)



// array reverse - reverses the elements in the array
// console.log(colors)
// colors.reverse()
// console.log(colors)
// console.log(colors.length)

// console.log(colors)
// console.log(colors.length)

// // array shift - removes the first element in an array
// console.log(colors)
colors.shift()
// console.log(colors)
// console.log(colors.length)

// // console.log(food)


// Objects - is also a way of storing multiple values, but in a key, value pair approach 
const student = {name: "samson", age: 5, color: 'blue', gender: 'male' }
const student2 = {name:"olatunde", age: 4, color: 'green',gender: 'male'}
// console.log(student2)


// // undefined & null

// Variables
// variable is a way of storing data in javascript

var name = 'sunkanmi'  // for global variables
let name2 = 'samson' // for local/enviromrnt variables
name2 = 'Mr. Olagoke' //reassignment
// console.log(name2)
const color = 'blue' // constanat variables


// operators in javascript
// console.log(2 + 2)
// console.log(2 * 2)
// console.log(8 - 2)
// console.log(4 / 2)


// FUNCTIONS IN JAVASCRIPT
// functions are way of performing specific activities/actions in javascript.
// it sometimes takes in some 'parameters' which the function might require to parform an action
// Take this example: for outputing details of users and presenting it as a statement

// output_user_details --> snakecase
// outputUserDetails --> camelcase
// ""
// ''
// `` --> template string


// defining the function
function outputUserDetails(name, age, gender, color, race){
 console.log(`
 Hello there, i'd like to take a few minutes of your time to 
 tell you about ${name}, ${name} is ${age} years old, with 
 a favourite color of ${color}, ${name} is of the ${race} race, 
 and is a ${gender}🤸🏾‍♂️🎉😜😋🚀
 `)
}

// initialization of function
// For a function to work it has to be initialized.😉
// the parameters have to follow the order in the function
// outputUserDetails("abimbola", 16,"female", "purple", "black")
// outputUserDetails("wizkid", 29,"male", "red", "black")
// outputUserDetails("mia", 22,"male", "pink", "white")

// Let's create another function
// Create Function to add two numbers together
// function additionOfTwoNumbers( number1, number2){
//  console.log(`The addition of ${number1}, and ${number2} is ${number1 + number2}`
//  )
// }
// additionOfTwoNumbers(382,219)

// LOOPS
// for loops
// while loops

// Example
// For each
let faculties = ["Law", "Art", "Science", "Social Science", "Admin", "College", "Tech", "Edm", "Edu"]
console.log(faculties)
faculties.forEach(function(f){
 console.log('Faculty of', f)
})

