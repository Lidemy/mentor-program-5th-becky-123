// eslint-disable-next-line
function solve(lines) {
  const nums = lines[0].split(' ')
  for (let i = Number(nums[0]); i <= Number(nums[1]); i++) {
    if (isNarcissistic(i) === true) console.log(i)
  }
}

function isNarcissistic(num) {
  let sum = 0
  const text = `${num}`
  for (let i = 0; i < text.length; i++) {
    sum += Math.pow(Number(text[i]), text.length)
  }
  return sum === num
}
