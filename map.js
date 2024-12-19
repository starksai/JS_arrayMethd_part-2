
// 2. map()

// 1Q)Doubling Each Number in an Array:

let  numbers = [1,2,3,4,5];

console.log(numbers.map(x=>x*2));

// 2Q) Converting an Array of Strings to Uppercase:

let names = ["sai","kumar", "reddy", "pyatlo"];

let upperName =names.map(name=>name.toUpperCase());

console.log(upperName);

// 3Q) Extracting Specific Properties from an Array of Objects:

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  const ids = users.map(user => user.id);
  console.log(ids);

//   4Q) Calculating the Length of Each String in an Array:

const words = ['apple', 'banana', 'cherry'];

console.log(words.map(word => word.length));

  

