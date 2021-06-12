const element = document.querySelector('.lottery__btn')
const background = document.querySelector('.banner')
const prizeText = document.querySelector('.prize h1')
const errorMessage = '系統不穩定，請再試一次'
element.addEventListener('click', (e) => {
  const request = new XMLHttpRequest()
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      let response
      try {
        response = JSON.parse(request.responseText)
      } catch (err) {
        alert(errorMessage)
        console.log(err)
        return
      }
      prize(response.prize)
    } else {
      alert(errorMessage)
    }
  })
  request.onerror = () => {
    console.log('error')
  }
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
  request.send()
})

function prize(response) {
  let className
  let title
  if (response === 'FIRST') {
    className = 'bg__1stPrize'
    background.classList.add('bg__cover')
    title = '恭喜你中頭獎了！日本東京來回雙人遊！'
  } else if (response === 'SECOND') {
    className = 'bg__2ndPrize'
    background.classList.add('bg__cover')
    title = '二獎！90 吋電視一台！'
  } else if (response === 'THIRD') {
    className = 'bg__3rdPrize'
    background.classList.add('bg__cover')
    title = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'
  } else if (response === 'NONE') {
    className = 'bg__noPrize'
    title = '銘謝惠顧'
    prizeText.classList.add('h1__none')
  } else {
    alert(errorMessage)
    return
  }
  background.classList.add(className)
  prizeText.innerText = title
  document.querySelector('.lottery').classList.toggle('hide')
  document.querySelector('.prize').classList.toggle('hide')
}

document.querySelector('.prize__btn').addEventListener('click', (e) => {
  background.classList.remove('bg__cover')
  background.classList.remove('bg__1stPrize')
  background.classList.remove('bg__2ndPrize')
  background.classList.remove('bg__3rdPrize')
  background.classList.remove('bg__noPrize')
  prizeText.classList.remove('h1__none')
  document.querySelector('.lottery').classList.toggle('hide')
  document.querySelector('.prize').classList.toggle('hide')
})
