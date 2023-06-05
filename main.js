// Arrow functions
// const square = function(num) {
//     return num * num
// };
const square = num => num * num

// const calculateArea = function (length, width) {
//     return length * width
// }
const calculateArea  = (length, width) => length * width

// Destructuring arrays
const personArray = ['John Doe', 25, 'USA']

//Here your code task 1
//...
const getArrayInfo =  person  => {
    const [fullName, age, country ] = person
    return {
        fullName, 
        age,
        country
    }
}

console.log( getArrayInfo(personArray) )

//Here your code task 2
//...     split()
const getDateParts = date => {
   const [year, month, day] = date.split("-")
   return {year, month, day}
}
console.log( getDateParts('2022-05-15') )

//Destructuring objects
const personObj = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };

const getObjInfo = person => {
    const { age, name } = person
    return `${name} is ${age} years old`
}

  console.log(getObjInfo(personObj))


// Spread syntax
//Task 1
const person = {
name: 'John Doe',
age: 30,
}

const extendObj = (person, info ) => ({...person, ...info})
     
console.log(
extendObj(person , { city: 'New York', occupation: 'Developer' })
)

//Task 2
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]

console.log(
combineArrays(arr1, arr2, arr3)
)

// function combineArrays(arr1, arr2, arr3) { 
//     return [...arr1, ...arr2, ...arr3]
// }
// const combineArrays = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3]
  
// Modules
import { combineArrays } from "/module.js"





