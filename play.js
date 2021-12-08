// var name = "Game"
// var age = 27

const { rejects } = require("assert")

// const summarizeUser = (userName, userAge) => {
//   return 'Name is ' + userName + ', Age is ' + userAge;
// }

// const add = (a, b ) => a + b

// function summarizeUser(userName, userAge) {
//   return 'Name is ' + userName + ', Age is ' + userAge;
// }

// console.log(summarizeUser(name, age))
// console.log(add(5, 4))

const person = {
  name: "Game",
  age: 27,
  greeting() {
    console.log("Hi, I'm " + this.name)
  }
}

person.greeting()

// Destructuring
const printName = ({ name }) => {
  console.log(name)
}
printName(person)

const { name, age } = person
console.log("name: " + name + ', age: ' + age)

const hobbies = ["Sports", "Sleep"]
const newHobbies = [...hobbies, 'Programming']
console.log(newHobbies)

// Async and Promise
const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500)
  })

  return promise;
}

setTimeout(() => {
  console.log("Timer is done!")
  fetchData().then((text) => {
    console.log(text)
  })
}, 2000)

console.log('Hello!')
console.log('Hi!')