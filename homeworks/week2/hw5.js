function join(arr, concatStr) {
  var str = arr[0]
  for (var i=1; i<arr.length; i++){
    str += concatStr + arr[i]
  }
  return str
}

function repeat(str, times) {
  var ans = ''
  for (var i=0; i<times; i++){
     ans += str
  }
  return ans
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
