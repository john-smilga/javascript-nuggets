Somewhat typical approach

```js
const form = document.querySelector('.form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  // check for empty values
  if (!nameValue || !emailValue || !passwordValue) {
    console.log('please provide values');
    return;
  }
  // do something
  console.log(nameValue, emailValue, passwordValue);

  // after that clear values
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
});
```

```js
const form = document.querySelector('.form');
// also valid approach
// const formData = new FormData(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  // won't directly return values
  console.log(formData);
});
```

```js
const form = document.querySelector('.form');
// also valid approach
// const formData = new FormData(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  // won't directly return values
  console.log(formData);

  // spread out - entries, values, keys
  const entries = [...formData.entries()];
  console.log(entries);
  const values = [...formData.values()];
  console.log(values);
  const keys = [...formData.keys()];
  console.log(keys);

  // iterate over with "for of" loop
  for (let [name, value] of formData) {
    console.log(`${name} = ${value}`);
  }

  // check for value
  const name = formData.get('name');
  console.log(name);
  // append
  formData.append('test', 'test');
  // delete
  formData.delete('test');
  formData.delete('email');
  // check property
  const checkName = formData.has('name');
  console.log(checkName);

  const entries = [...formData.entries()];
  console.log(entries);

  // it's not JSON so....(depends on the server)
  axios.post('someUrl', formData);

  const formObject = Object.fromEntries(formData);
  console.log(formObject);
  // will work
  axios.post('someUrl', formObject);

  // reset
  e.currentTarget.reset();
});
```

Object From Entries

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

```js
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const values = [...formData.values()];

  if (values.includes('')) {
    console.log('please enter all values');
    return;
  }
  const formObject = Object.fromEntries(formData);
  // do something
  console.log(formObject);

  e.currentTarget.reset();
});
```
