axios = require('axios'),
FormData = require('form-data');
const nodeHtmlToImage = require('node-html-to-image')
const Credentials = require("./bomdia-77f9789a563d.json")

//Receive URL of background, URL of sticker 1, URL of sticker 2 and the phrase, returns image mounted in base64
async function createImage(backgroundUrl, sticker1Url, sticker2Url, phrase){
	// var backgroundBase64 = await imageUrlToImageBase64(backgroundUrl); //b64
	// var sticker1Base64 = await removeBg(sticker1Url); //b64
	// var sticker2Base64 = await removeBg(sticker2Url); //b64
	
	var backgroundBase64
	var sticker1Base64
	var sticker2Base64

	var createdImage = await composeImages(backgroundBase64,sticker1Base64,sticker2Base64,phrase) //b64

	return createdImage
}

//Receive the base64 of the background, base64 of sticker 1, base64 of sticker, return the image mounted in base64
async function composeImages(backgroundb64, sticker1b64, sticker2b64, phrase){
var completeImage = await nodeHtmlToImage({
  html: `<html>
  <head>
    <title>Display Image</title>
  </head>
  <body>
  <p>{{phr}}</p>
  <div>
    <img style='display:block; width:100px;height:100px;' id='base64image'                 
	   src='data:image/jpeg;base64, {{bg}}' />
  </div>
  <div align = "center">
    <img style='display:block; width:100px;height:100px;' id='base64image'                 
	   src='data:image/jpeg;base64, {{stk1}}' />
  </div>
  <div align = "right">
    <img style='display:block; width:100px;height:100px;' id='base64image'                 
	   src='data:image/jpeg;base64, {{stk2}}' />
  </div>
  </body>
</html>`,
  content: {bg: backgroundb64, stk1: sticker1b64, stk2: sticker2b64, phr: phrase}
})

return Buffer.from(completeImage, 'binary').toString('base64')

}

//Receives image url and returns image in base64
async function imageUrlToImageBase64(url) {
	return axios
	  .get(url, {
		responseType: 'arraybuffer'
	  })
	  .then(response => Buffer.from(response.data, 'binary').toString('base64'))
}

//Receive image url, send to background removal Api and return base64 of image without background
async function removeBg(url){
	var data = new FormData();
	data.append('image_url', url);
	data.append('size', 'auto');

	var config = {
	method: 'post',
	url: 'https://api.remove.bg/v1.0/removebg',
	headers: { 
		'X-Api-Key': Credentials.XApiKey, 
		'accept': 'application/json',
		...data.getHeaders()
	},
	data : data
	};
	var b = await axios(config)
	return b.data.data.result_b64
}

module.exports = createImage;