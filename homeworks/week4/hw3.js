const request = require('request')
const process = require('process')

request(`https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
  (error, response, body) => {
    if (response.statusCode !== 404) {
      const json = JSON.parse(body)
      for (let i = 0; i < json.length; i++) {
        const N = '\n'
        console.log(`============ ${
        N}國家：${json[i].name} ${
        N}首都：${json[i].capital} ${
        N}貨幣：${json[i].currencies[0].code} ${
        N}國碼：${json[i].callingCodes}`)
      }
    } else console.log('找不到國家資訊')
  }
)
