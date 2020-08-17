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

let appState = 'loading';
appState = 'error';

const keyName = 'computer';

const product = {
  [appState]: true,
};

product[keyName] = 'apple';
console.log(product);

const state = {
  loading: true,
  name: '',
  job: '',
};

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'john');
updateState('job', 'developer');
updateState('loading', false);

updateState('products', []);
updateState('name', 'peter');
console.log(state);
