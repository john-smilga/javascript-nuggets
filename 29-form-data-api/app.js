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
