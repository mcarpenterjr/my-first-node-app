const person = {
  name: 'Mark',
  age: 34,
  greet() {
    console.log('Hi, I am ' + this.name)
  }
}

const hobbies = ['Sports', 'Cooking', 'Eating'];

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

hobbies.push('Learning');
console.log(hobbies);
hobbies = ['a', 'new', 'array'];