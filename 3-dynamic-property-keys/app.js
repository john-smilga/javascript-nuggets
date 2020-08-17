// dot notation
const person = {
  name: 'john',
};
console.log(person.name);
person.age = 25;
console.log(person);

// square bracket notation
const items = {
  'featured-items': ['item-1', 'item-2'],
};
console.log(items['featured-items']);
console.log(person['name']);

let moreInfo = 'featured';
moreInfo = 'on sale';

const name = 'computer';

const product = {
  [moreInfo]: true,
};

product[name] = 'random value';
console.log(product);

const state = {
  products: [],
};

function updateState(key, value) {
  state[key] = value;
}

updateState('john', 24);
updateState('peter', 30);
updateState('items', []);
updateState('featured', true);

updateState('john', 45);
updateState('products', ['first item']);
console.log(state);
