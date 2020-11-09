const google = require('googleapis').google
const customSearch = google.customsearch("v1")
const googleSearchCredentials = require("./bomdia-77f9789a563d.json")

async function generateImage(params) {
    let result = await googleSearchReturnImagesLinks("heart no background")
    console.log(result)
}

async function googleSearchReturnImagesLinks (query) {
    const response = await customSearch.cse.list({
      auth: googleSearchCredentials.apiKey,
      cx: googleSearchCredentials.searchEngineId,
      searchType: "image",
      q: query,
      num: 2
    })
    return response.data.items[0].link
}

module.exports = generateImage