//  Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// const example = async () => {
// async function example()
// }

// console.log(example())

// async function someFunc() {
//   const result = await example()
//   console.log(result)
// }

// someFunc()

const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' },
]

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five'] },
  { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
]

const getData = async () => {
  try {
    const user = await getUser('john')
    if (user) {
      const articles = await getArticles(user.id)
      // do something about articles
      // console.log(articles)
      // return articles
    }
  } catch (error) {
    console.log(error)
  }
}

getData()

// getUser('susan')
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err))

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name)

    if (user) {
      return resolve(user)
    } else {
      reject(`No such user with name : ${name}`)
    }
  })
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId)

    if (userArticles) {
      return resolve(userArticles.articles)
    } else {
      reject(`Wrong ID`)
    }
  })
}
