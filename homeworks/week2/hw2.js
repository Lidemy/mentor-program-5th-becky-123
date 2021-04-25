function capitalize(str) {
  var arr = []
  if (str[0]>='a' && str[0]<='z'){
      for (var i=0; i<str.length; i++){
        arr.push(str[i])
      }
      arr[0] = String.fromCharCode(arr[0].charCodeAt()-32)
      return arr.join('')
  }else {
   return str 
  }
}

console.log(capitalize('hello'));
