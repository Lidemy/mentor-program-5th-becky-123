function checkText(e, name) {
  if (document.querySelector(`input[name=${name}]`).value === '') {
    document.querySelector(`input[name=${name}]`).style.borderColor = '#e74149'
    const element = document.querySelector(`.${name} > div`)
    element.innerText = '* 這是必填問題'
    e.preventDefault()
  } else {
    document.querySelector(`input[name=${name}]`).style.borderColor = '#d0d0d0'
    const block = document.querySelector(`.${name} > div`)
    block.innerText = ''
    content += `
    ${document.querySelector(`.${name} > label`).innerText}：${document.querySelector(`input[name=${name}]`).value}`
    count++
  }
}
function checkRadio(e, radio) {
  if (document.querySelector(`input[type=${radio}]:checked`) === null) {
    const element = document.querySelector('.question__radio > div')
    element.innerText = '* 這是必填問題'
    e.preventDefault()
  } else {
    const element = document.querySelector('.question__radio > div')
    element.innerText = ''
    const checkedId = document.querySelector(`input[type=${radio}]:checked`).getAttribute('id')
    content += `
    ${document.querySelector('.question__radio > label').innerText}：${document.querySelector(`.question__radio > label[for=${checkedId}`).innerText}`
    count++
  }
}
const element = document.querySelector('.lazy__form')
let content = ''
let count = 0
element.addEventListener('submit', (e) => {
  count = 0; content = ''
  checkText(e, 'name')
  checkText(e, 'email')
  checkText(e, 'phone')
  checkRadio(e, 'radio')
  checkText(e, 'know')
  if (count === 5) {
    alert(content)
  }
})
