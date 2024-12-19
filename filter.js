// 1Q) Filtering Out Odd Numbers from an Array:

let numbers = [1,2,3,4,5,6,7,8];

console.log(numbers.filter(number => number%2===1));

// 2Q) Selecting Words Longer Than Three Characters:

const words = ['hi', 'hello', 'hey', 'hola'];

console.log(words.filter(word=> word.length>3));

// 3Q) Filtering Objects Based on a Property Value:

const users = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: true },
  ];
  
  console.log(users.filter(user=> user.active));

//   4Q) Removing Null or Undefined Values from an Array:
const mixed = [1, null, 2, undefined, 3];

console.log(mixed.filter(value => value != null));


// 5Q) Filtering an Array of Strings for a Specific Substring:

const phrases = ['apple pie', 'banana bread', 'cherry tart'];

console.log(phrases.filter(value => value.includes('apple')));
