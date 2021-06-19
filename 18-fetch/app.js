//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project'

// console.log(fetch(url))

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

const getTours = async () => {
  try {
    const resp = await fetch(url)

    return resp.json()
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
}
console.log(getTours().then())
