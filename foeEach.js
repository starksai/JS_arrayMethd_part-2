// search and find and write 5 examples for map, filter, forEach


// 1. forEach

// 1Q) Logging Each Element:
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));

// 2Q) Calculating the Sum of an Array:
const numbers = [10, 20, 30];
let sum = 0;
numbers.forEach(number => {
  sum += number;
});
console.log(sum); 

// 3Q) Appending Text to Each String in an Array:

let names = ["sai","kumar","reddy","alice","bob"];

let appendedNames =[];

names.forEach(name=>appendedNames.push(`Hello ${name}`));
console.log(appendedNames);

// 4Q) Converting an Array of Objects to a Specific Format:
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  let userNames = [];
  users.forEach(user=>{userNames.push(user.name)});
  console.log(userNames);

//   5Q)Modifying Each Element in an Array In-Place:

let a =[1,2,3,4];

a.forEach((number,index,arr)=>console.log(arr[index]=number*2));



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2. map()

// 1Q)Doubling Each Number in an Array:

let
