// eslint-disable-next-line
function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
  }
}

function isPrime(num) {
  let i = 0
  if (num === 1) return false
  for (i = 2; i < num; i++) {
    if (num % i === 0) break
  }
  if (i === num) return true
  else return false
}
