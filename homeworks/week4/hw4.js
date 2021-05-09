const request = require('request')

request({
  url: 'https://api.twitch.tv/kraken/games/top?limit=100',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'ofvc8fo7vvqzz62v0texqs8879y4np'
  }
},
(error, response, body) => {
  const json = JSON.parse(body)
  for (let i = 0; i < json.top.length; i++) {
    console.log(`${json.top[i].viewers} ${json.top[i].game.name}`)
  }
}
)
