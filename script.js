

// //error handling 

// async function getUsers(){

//     try{

//         const response = await fetch(url);

//         const data = await response.json();

//         console.log(data);

//     }catch(error){

//         console.log(error);

//     }

// }

// //template literal

// const name = "John";
// const age = 30;
// const message = `hello my name is ${name} and I am ${age} years old.`;
// console.log(message);

// const text= `This is a multi-line string.
// It can span multiple lines.`;
// console.log(text);

// const user = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// }
// console.log(`My name is ${user.name}, I am ${user.age} years old and I live in ${user.city}.`);



// //function

// function greet(name){
//     console.log(`hello ${name}!`)

// }
// greet("Alice");

// const users = () => ({
//     name: "Alice",
//     age: 25,
//     city: "New York"
// });
// console.log(users());


// //map

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map(
//     num=>num*2
// )
// console.log (result)


// //callback
// const number = [10, 20, 30, 40];

// const result = number.filter((num) => {
//     return num > 20;
// });

// console.log(result);


// //spread and rest

// const fruit = ["apple","banana","orange"]
// const newFruits =[...fruits];
// new fruits.push = ("Mango");

// comnsole.log(fruits);
// console.log(newFruits);

// //object copy
// const user = {
//     name:"BITHI",
//      age:22,
//     }
//     const newUser = {
//         ...user
//     }

//     newUser.age = 25
//     console.log (user);
//     console.log(newUser);



//    async function getUser(){
//       const response = await fetch(
//          "https://jsonplaceholder.typicode.com/users"
//       );
//         const data = await response.json();
//     }
//        getuser();

//        //api theke just nam ana
//        async function getUser(){
//         const response = await fetch(
//              "https://jsonplaceholder.typicode.com/users"
//         );
//         const data = await response.json();
//         const usersName = data.map((user) =>{
//             return user.name
//         });
//         onsole.log(userName);
//        }
//        getUsers();

//       // api theke jader id 5 er beshi
//       async function getUsers (){
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         )

//         const data = await response.json();

//         const result = data.filter ((user) =>{
//             return user.id >5
//         });
//         console.log(user)
//       }
//       getUsers();






//lecture 2

//MODULES alada file ba alada name onno file e pathanu 
//mathUtils.js

// export const PI = 3.1416;
// export function add(a,b){
//     return a+b;
// }
// export function subtract(a,b){
// return a-b;
// }


//app.js

// name export er somoy curly bracket dite hoy

// import { PI,add } from './mathUtils.js';
// console.log(PI);
// console.log(add(5,10)); 



// default export

//user.js
// export default function getUser(user){
//     return user.name;

// }

//app.js e import kore use ...default import e curlyy bracket lage na 

// ekhane getUser k jeknunu name e import kora jabe
// import fetchName from './user.js';

// const myUser = { name:"anik",age:25}
// console.log(fetchName(myUser));



//destructuring

// const fruits = ["apple", "banana", "orange"];

// const[first, second, third]= fruits;
// console.log(first);
// console.log(second);
// console.log(third);\


// const fruits = ["apple","banana","orange"];
// const [,,third]= fruits;
// console.log(third);

// rest operators
// const fruits =["apple","banana","orange"];
// const [first,...others] = fruits;
// console.log(first);
// console.log(others);


// object destructuring

// const  {name,age,county} = User;
// console.log(name);
// console.log(age);
// console.log(country); 


//variable e nam bodlanu
// const user ={
//     name="bithi",
//     age:22
// }
// const {name:username, age:userage} =user
// console.log(username);
// console.log(userage);

//most use in react
// const user ={
//     name ="bithi",
//     age=22
// }
// function showUser({name,age,}){
//     console.log(name);
//     console.log(age)

// }
// showUser(user);


// foreach
// const fruits = ["apple","banana","orange"]
// fruits.forEach((fruits,index)=>{
//     console.log(index,fruits)
// }


// find
// const numbers = [5, 8, 10, 15, 20];

// const result = numbers.find(item => {
//   return number > 10;
// });

// console.log(result);

// sort

// const users = [
//   { name: "Bithi", age: 24 },
//   { name: "Rafi", age: 18 },
//   { name: "Nila", age: 30 }
// ];

// users.sort((a, b) => b.age - a.age);

// console.log(users);


// reduce
// const numbers = [10, 20, 30, 40];

// const total = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);

// console.log(total);



//push

// let fruits = ["apple","Banana",]

// fruits.push("Mongo");

// console.log(fruits);

// slice

// let colors = ["red","green","blue","yellow","purple"];

// //index 1 theke shuruu kore  3 er ager index porjonto kata 
// let newColors = colors.slice(1,3);

// console.log(newColors)

// 0 = শুরু হবে index 0 থেকে
// 5 = index 5 এর আগ পর্যন্ত নিবে
// let text = "hello world";
// let word = text.slice(0,5);

// console.log(word);


//reverse
// let numbers = [1,2,3,4,5];
// numbers.reverse()
// console.log(numbers)


//join 
//default vabe , diye add korbe ...
// let fruits = ["apple","banana","mango"];

// let result = fruits.join();
// console.log(result)

//desh diye
// let fruits = ["apple","banana","mango"];

// let result = fruits.join("-");
// console.log(result);


//pop
// let fruits = ["apple","banana","orange"];
// let removed = fruits.pop();
// console.log(removed);
// console.log(fruits);


//unshift
// const fruits = ["apple","mango"]
// fruits.unshift("mongo")
// console.log(fruits)


//shift
// const fruits = ["apple","banana","mango"]

// const result = fruits.shift();
// console.log(fruits);
// console.log(result);


//startsWith
// const text = "hello world";

// console.log(text.startsWith("world"))

//endsWith
// const text = "hello world"
//  console.log(text.endsWith("world"));


//repeat
// const text = "hi";
// const result = text.repeat(3);
// console.log(result);


//default parameter
// function greet(name= "guest"){
//     console.log("hello"+name);

// }
// greet()


//argument hisabe bithi pass kora holo

// function greet(name= "guest"){
//     console.log("hello"+ name)
// }
// greet("bithi")

//arrow 
const add = (a,b) =>a+b
console.log(add(10,20))