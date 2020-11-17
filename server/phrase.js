const axios = require('axios')

async function getPhrase({type}) {
    if (!typeParams.includes(type)) type = getRandomType()
    let { data } = await axios.get("http://allugofrases.herokuapp.com/frases/random")
    let phrase = data.frase + getComplement(type)
    return phrase
}

function getRandomType() {
    return typeParams[Math.floor(Math.random() * typeParams.length)]
}

function getComplement(type) {
    switch (type) {
        case "dia":
            return "\nBom dia!"
        case "tarde":
            return "\nBoa tarde!"
        case "noite":
            return "\nBoa noite!"
        case "madrugada":
            return "\nBoa madrugada!"
    }
}

const typeParams = ["dia", "tarde", "noite", "madrugada"]

module.exports = getPhrase;