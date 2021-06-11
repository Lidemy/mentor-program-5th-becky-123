const element = document.querySelectorAll('.faq__question')
for (let i = 0; i < element.length; i++) {
  element[i].addEventListener('click', (e) => {
    const answer = document.querySelector(`.faq__set:nth-child(${i + 1}) > .faq__answer`)
    answer.classList.toggle('faq__answer__active')
  })
}
