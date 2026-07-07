

//error handling 

async function getUsers(){

    try{

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    }catch(error){

        console.log(error);

    }

}

//template literal

const name = "John";
const age = 30;
const message = `hello my name is ${name} and I am ${age} years old.`;
console.log(message);

const text= `This is a multi-line string.
It can span multiple lines.`;
console.log(text);

const user = {
    name: "Alice",
    age: 25,
    city: "New York"
}
console.log(`My name is ${user.name}, I am ${user.age} years old and I live in ${user.city}.`);



//function

function greet(name){
    console.log(`hello ${name}!`)

}
greet("Alice");

const users = () => ({
    name: "Alice",
    age: 25,
    city: "New York"
});
console.log(users());


//map

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(
    num=>num*2
)
console.log (result)


//callback
const number = [10, 20, 30, 40];

const result = number.filter((num) => {
    return num > 20;
});

console.log(result);


//spread and rest

const fruit = ["apple","banana","orange"]
const newFruits =[...fruits];
new fruits.push = ("Mango");

comnsole.log(fruits);
console.log(newFruits);

//object copy
const user = {
    name:"BITHI",
     age:22,
    }
    const newUser = {
        ...user
    }

    newUser.age = 25
    console.log (user);
    console.log(newUser);



   async function getUser(){
      const response = await fetch(
         "https://jsonplaceholder.typicode.com/users"
      );
        const data = await response.json();
    }
       getuser();

       //api theke just nam ana
       async function getUser(){
        const response = await fetch(
             "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        const usersName = data.map((user) =>{
            return user.name
        });
        onsole.log(userName);
       }
       getUsers();

      // api theke jader id 5 er beshi
      async function getUsers (){
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )

        const data = await response.json();

        const result = data.filter ((user) =>{
            return user.id >5
        });
        console.log(user)
      }
      getUsers();