const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 34;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRad = () => 1 + 1;
// console.log(add(3, 5));

console.log(summarizeUser(name, age, hasHobbies));