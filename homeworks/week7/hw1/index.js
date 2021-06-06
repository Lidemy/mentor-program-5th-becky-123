function checkText(e, name) {
  if (document.querySelector(`input[name=${name}]`).value === '') {
    document.querySelector(`input[name=${name}]`).style.borderColor = '#e74149'
    document.querySelector(`.${name} > div`).innerText = '* 這是必填問題'
    e.preventDefault()
    error = true
  } else {
    document.querySelector(`input[name=${name}]`).style.borderColor = '#d0d0d0'
    document.querySelector(`.${name} > div`).innerText = ''
    content += `
    ${document.querySelector(`.${name} > label`).innerText}：${document.querySelector(`input[name=${name}]`).value}`
  }
}
function checkRadio(e, radio) {
  if (document.querySelector(`input[type=${radio}]:checked`) === null) {
    document.querySelector('.question__radio > div').innerText = '* 這是必填問題'
    e.preventDefault()
    error = true
  } else {
    document.querySelector('.question__radio > div').innerText = ''
    const checkedId = document.querySelector(`input[type=${radio}]:checked`).getAttribute('id')
    content += `
    ${document.querySelector('.question__radio > label').innerText}：${document.querySelector(`.question__radio > label[for=${checkedId}`).innerText}`
  }
}
let content = ''
let error = false
document.querySelector('.lazy__form').addEventListener('submit', (e) => {
  content = ''; error = false
  checkText(e, 'name')
  checkText(e, 'email')
  checkText(e, 'phone')
  checkRadio(e, 'radio')
  checkText(e, 'know')
  if (!error) {
    if (document.querySelector('input[name=other]').value === '') {
      alert(content)
    } else {
      content += `
    ${document.querySelector('.other > label').innerText}：${document.querySelector('input[name=other]').value}`
      alert(content)
    }
  }
})
