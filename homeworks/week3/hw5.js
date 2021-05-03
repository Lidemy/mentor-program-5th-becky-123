// eslint-disable-next-line
function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    console.log(judge(lines[i]))
  }
}

function judge(line) {
  const arr = line.split(' ')
  const zero = BigInt(0)
  const sum = BigInt(arr[0]) - BigInt(arr[1])
  if (arr[2] === '1') {
    if (sum > zero) return 'A'
    if (sum < zero) return 'B'
    if (sum === zero) return 'DRAW'
  } else {
    if (sum > zero) return 'B'
    if (sum < zero) return 'A'
    if (sum === zero) return 'DRAW'
  }
}
