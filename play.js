const person = {
  name: 'Mark',
  age: 34,
  greet() {
    console.log('Hi, I am ' + this.name)
  }
}

const printName = ({ name }) => {
  console.log(name);
}
printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ['Cooking', 'Learning', 'Eating', 'Gaming'];
const [hob1, hob2] = hobbies;
console.log(hob1, hob2);