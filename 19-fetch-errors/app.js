//  Javascript Nuggets
// Fetch Errors
// Only throws an error if cannot resolve.
// Error Response still a response (400-500)

const url = 'https://www.course-api.com/react-tours-projects'

const getTours = async () => {
  try {
    const resp = await fetch(url)
    console.log(resp)
    if (!resp.ok) {
      const msg = `There was an error : "${resp.status} ${resp.statusText}"`
      throw new Error(msg)
    }
    const data = await resp.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getTours()
