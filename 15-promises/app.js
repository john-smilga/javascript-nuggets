//  Promises
// Pending, Rejected, FulFilled

const value = 2

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)

  if (random === value) {
    resolve(`you guessed correctly`)
  } else {
    reject('wrong number')
  }
})

console.log(promise)

promise
  .then((value) => console.log(value))
  .catch((error) => {
    console.log(error)
  })
