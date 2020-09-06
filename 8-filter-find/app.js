// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];
// filter
const youngPeople = people.filter((person) => {
  // if (person.age < 30) {
  //   return person;
  // }
  return person.age <= 25;
});
console.log(youngPeople);

const developers = people.filter((person) => person.position === 'developer');
console.log(developers);
// no match
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs);
// find
const peter = people.find((person) => person.name === 'peter');
console.log(peter);
// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);
// multiple matches
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === 'anna');
console.log(anna);

console.log(peter.position);
console.log(anna[0].position);
