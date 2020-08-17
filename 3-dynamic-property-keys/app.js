// dot notation
const person = {
  name: 'john',
};
person.age = 25;
console.log(person.name);
console.log(person.age);

// square bracket notation
const items = {
  'featured-items': ['item-1', 'item-2'],
};
console.log(items['featured-items']);
console.log(person['name']);

let moreInfo = 'on sale';

const product = {
  [moreInfo]: true,
};

console.log(product[moreInfo]);

const state = {
  products: [],
};

function addKeys(key, value) {
  state[key] = value;
}

addKeys('john', 24);
addKeys('peter', 30);
addKeys('items', []);
addKeys('featured', true);

addKeys('john', 45);
addKeys('products', ['first item']);
console.log(state);
