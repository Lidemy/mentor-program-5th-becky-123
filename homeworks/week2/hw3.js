function reverse(str) {
  var arr = []
  for (var i=0; i<str.length; i++){
    arr.splice(0,0,str[i])
  }
  console.log(arr.join(''))
}

reverse('hello');
