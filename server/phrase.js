const axios = require('axios')

async function getPhrase({type}) {
    if (!typeParams.includes(type)) type = getRandomType()
    // let { data } = await axios.get("http://allugofrases.herokuapp.com/frases/random") api not working
    let phrase = getRandomPhrase() + getComplement(type)
    return phrase
}

function getRandomType() {
    return typeParams[Math.floor(Math.random() * typeParams.length)]
}

function getRandomPhrase() {
    return genericPhrases[Math.floor(Math.random() * genericPhrases.length)]
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

const genericPhrases = [
    "A persistência é o caminho do êxito.",
    "Que o vento leve o necessário e me traga o suficiente.",
    "Algumas vezes coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver.",
    "Ser feliz não é viver apenas momentos de alegria. É ter coragem de enfrentar os momentos de tristeza e sabedoria para transformar os problemas em aprendizado.",
    "Se a caminhada está difícil, é porque você está no caminho certo.",
    "Chique é ser feliz. Elegante é ser honesto. Bonito é ser caridoso. Sábio é saber ser grato. O resto é inversão de valores.",
    "Ame seus pais, sua vida e seus amigos. Seus pais, porque são únicos. Sua vida, porque é curta demais. Seus amigos, porque são raros.",
    "Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.",
    "Prefira o sorriso, faz bem a você e aos que estão ao seu redor. Dê risada de tudo, de si mesmo. Não adie alegrias. Seja feliz hoje!",
    "O machado era de Assis. A rosa, do Guimarães. A bandeira, do Manuel. Mas feliz mesmo era o Jorge, que era amado.",
    "Quando algo ruim acontece você tem três escolhas: deixar isso definir você, deixar isso destruir você ou fazer isso te deixar mais forte."
]

module.exports = getPhrase;