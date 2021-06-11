document.querySelector('button').addEventListener('click', (e) => {
  const text = document.querySelector('input[type=text]').value
  if (text === '') {
    alert('Please enter your new task')
    e.preventDefault()
  } else {
    const div = document.createElement('div')
    div.classList.add('row')
    div.innerHTML = `
      <input type='checkbox' name='task' />
      <p>${escapeHtml(text)}</p>
      <div class='del'>＋</div>`
    document.querySelector('.list').appendChild(div)
  }
})

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

document.querySelector('.list').addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    document.querySelector('.list').removeChild(e.target.closest('.row'))
  }
})
