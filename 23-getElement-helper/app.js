//  Javascript Nuggets

const heading = document.querySelector('.heading');
// console.log(heading);

const listItems = document.querySelectorAll('.list-item');
// console.log(listItems);

const getElement = (selector, isList) => {
  const el = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  // not a list - exist or not
  // list - empty or not

  // if (!isList && el) return el;
  // if (isList && !el.length < 1) return el;

  if ((!isList && el) || (isList && !el.length < 1)) return el;
  throw new Error(`Please double check selector : ${selector}`);
};

console.log(getElement('.headin'));
