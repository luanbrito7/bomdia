const google = require('googleapis').google
const customSearch = google.customsearch("v1")
const googleSearchCredentials = require("./bomdia-77f9789a563d.json")

async function getMaterial({
  type,
  season,
  theme,
  color
}) {
  let seasonQueries, themeQueries, backgroundQuery;
  if (!seasonParams.includes(season)) season = getRandomParam("season")
  seasonQueries = getSeasonQueries(season)
  backgroundQuery = getBackgroundQuery(season)

  if (!themeParams.includes(theme)) theme = getRandomParam("theme")
  themeQueries = getThemeQueries(theme)

  if (!backgroundColors.includes(color)) color = getRandomParam("color")

  let seasonUrl = await googleSearchReturnImagesLinks(getRandomParam("query", seasonQueries))
  let backgroundUrl = await googleSearchReturnImagesLinks(backgroundQuery, color)
  let themeUrl = await googleSearchReturnImagesLinks(getRandomParam("query", themeQueries))
  
  return {
    season: seasonUrl,
    background: backgroundUrl,
    theme: themeUrl
  }
}

async function googleSearchReturnImagesLinks (query, dominantColor) {
  const response = await customSearch.cse.list({
    auth: googleSearchCredentials.apiKey,
    cx: googleSearchCredentials.searchEngineId,
    safe: "active",
    searchType: "image",
    fileType: "jpg|png",
    imgDominantColor: dominantColor,
    rights: 'cc_publicdomain',
    q: query,
    num: 1
  })
  return response.data.items[0].link
}

function getSeasonQueries(season) {
  switch (season) {
    case 'verao':
      return ["sol", "havaianas", "côco verde"]
    case 'inverno':
      return ["boneco de neve", "floco de neve"]
    case 'outono':
      return ["folha seca", "xícara café"]
    case 'primavera':
      return ["flor", "passarinho"]
  }
}

function getBackgroundQuery(season) {
  switch (season) {
    case 'verao':
      return "paisagem verão"
    case 'inverno':
      return "paisagem inverno"
    case 'outono':
      return "paisagem outono"
    case 'primavera':
      return "paisagem primavera"
  }
}

function getThemeQueries(theme) {
  switch (theme) {
    case 'carnaval':
      return ["sombrinha frevo", "pitu", "corote", "skol"]
    case 'natal':
      return ["gorro papai noel", "árvore da natal", "estrela", "anjinho"]
    case 'pascoa':
      return ["coelho da páscoa", "ovos páscoa", "cruz páscoa"]
    case 'ano novo':
      return ["fogos de artifício"]
  }
}

function getRandomParam(type, queries = []) {
  switch (type) {
    case "season":
      return seasonParams[Math.floor(Math.random() * seasonParams.length)]
    case "theme":
      return themeParams[Math.floor(Math.random() * themeParams.length)]
    case "color":
      return backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
    case "query":
      return queries[Math.floor(Math.random() * queries.length)]
  }
}

const backgroundColors = [
  "blue", "brown", "gray", "green", "orange", "pink", "purple", "red", "teal", "white", "yellow"
]

const seasonParams = ["verao", "inverno", "outono", "primavera"]

const themeParams = ["carnaval", "natal", "pascoa", "ano novo"]

module.exports = getMaterial