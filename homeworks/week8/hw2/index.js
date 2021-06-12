const API_URL = 'https://api.twitch.tv/kraken'
const CLIENT_ID = 'ofvc8fo7vvqzz62v0texqs8879y4np'
const ACCEPT = 'aapplication/vnd.twitchtv.v5+json'
const topGame = []
const STREAM_TEMPLATE = `<a href="$url" target="_blank">
        <img class="stream__preview" src="$preview" /></a>
        <p class="stream__viewers">$viewers viewers</p>
        <div class="stream__profile">
          <img class="stream__avatar" src="$logo"/>
          <div class="stream__desc">
            <h3 class="stream__title">$status</h3>
            <p class="stream__name">$name<p>
          </div>
        </div>`
let searchNum = 0

getGames((games) => {
  for (let i = 0; i < 5; i++) {
    const element = document.querySelector(`.btn__top${i + 1} a`)
    element.innerText = games.top[i].game.name
    topGame.push({
      name: `${games.top[i].game.name}`,
      img: `${games.top[i].game.box.medium}`,
      viewers: `${games.top[i].viewers}`
    })
  }
  changeHeader(0)
  changeGame(topGame[0].name, searchNum)
  const btn = document.querySelectorAll('.navbar__btn > li')
  for (let j = 0; j < btn.length; j++) {
    btn[j].addEventListener('click', (e) => {
      document.querySelectorAll('.stream__data').forEach((elem) =>
        elem.parentNode.removeChild(elem))
      searchNum = 0
      changeHeader(j)
      changeGame(topGame[j].name, searchNum)
    })
  }
})

function getGames(callback) {
  const request = new XMLHttpRequest()
  request.open('GET', `${API_URL}/games/top`, true)
  request.setRequestHeader('Accept', ACCEPT)
  request.setRequestHeader('Client-ID', CLIENT_ID)
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      const response = JSON.parse(request.responseText)
      callback(response)
    } else {
      console.log(request.status, request.responseText)
    }
  })
  request.onerror = () => {
    console.log('error')
  }
  request.send()
}

function changeHeader(n) {
  document.querySelector('.game__name').innerText = topGame[n].name
  document.querySelector('.game__viewers').innerText = `${topGame[n].viewers} viewers`
  document.querySelector('.game__logo').outerHTML = `
    <img class="game__logo" src="${topGame[n].img}" />`
}

function changeGame(gameName, num) {
  getStream(gameName, (res) => {
    for (let i = num; i < num + 20; i++) {
      appendStream(res[i])
    }
  })
}

function appendStream(stream) {
  const div = document.createElement('div')
  div.classList.add('stream__data')
  div.innerHTML = STREAM_TEMPLATE
    .replace('$url', stream.channel.url)
    .replace('$preview', stream.preview.medium)
    .replace('$viewers', stream.viewers)
    .replace('$logo', stream.channel.logo)
    .replace('$status', stream.channel.status)
    .replace('$name', stream.channel.name)
  document.querySelector('.stream__list').appendChild(div)
}

function getStream(gameName, callback) {
  const request = new XMLHttpRequest()
  request.open('GET', `${API_URL}/search/streams?query=${encodeURIComponent(gameName)}&limit=100`, true)
  request.setRequestHeader('Accept', ACCEPT)
  request.setRequestHeader('Client-ID', CLIENT_ID)
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      const res = JSON.parse(request.responseText).streams
      callback(res)
    } else {
      console.log(request.status, request.responseText)
    }
  })
  request.onerror = () => {
    console.log('error')
  }
  request.send()
}

document.querySelector('.showmenu').addEventListener('click', (e) => {
  event.preventDefault()
  document.querySelector('body').classList.toggle('menu-show')
})

window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY + 2) >= document.body.offsetHeight) {
    if (searchNum < 80) {
      searchNum += 20
      const gameName = document.querySelector('.game__name').innerText
      changeGame(gameName, searchNum)
    }
  }
}
