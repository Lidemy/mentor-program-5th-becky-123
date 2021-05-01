// eslint-disable-next-line
function solve(lines) {
  const str = reverse(lines[0])
  if (lines[0] === str) console.log('True')
  else console.log('False')
}

function reverse(string) {
  let text = ''
  for (let i = string.length - 1; i >= 0; i--) {
    text += string[i]
  }
  return text
}
