//  Javascript Nuggets - Callback Hell

// after 1s heading1 red;
// after 3s heading2 blue;
// after 2s heading3 green;
// IN SEQUENCE !!!!

const heading1 = document.querySelector('.one')
const heading2 = document.querySelector('.two')
const heading3 = document.querySelector('.three')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  setTimeout(() => {
    heading1.style.color = 'red'
    setTimeout(() => {
      heading2.style.color = 'blue'
      setTimeout(() => {
        heading3.style.color = 'green'
      }, 2000)
    }, 3000)
  }, 1000)
})
