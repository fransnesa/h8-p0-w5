function changeVocals (str) {
  //code di sini
  //var vocal = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"]
  var kataBaru = ""
  for(var i=0;i < str.length; i++){
    if(str[i]=== "a"||str[i]==="i"||str[i]==="u"||str[i]==="e"||str[i]==="o"||str[i]==="A"||str[i]==="I"||str[i]==="U"||str[i]==="E"||str[i]==="O"){
        kataBaru += String.fromCharCode(str[i].charCodeAt()+1)
          
    }
    else{
        kataBaru += str[i]
    }  
    }
    return kataBaru
}

function reverseWord (str) {
  //code di sini
  var baru = ""
  for(var j=str.length-1; j >= 0;j--){
    baru +=str[j]
  }
  return baru
}

function setLowerUpperCase (str) {
  //code di sini
  var kecilGede = ""
  for(var k=0;k < str.length; k++){
    if(str[k].toUpperCase()===str[k]){
        kecilGede += str[k].toLowerCase()
    }
    else{
        kecilGede += str[k].toUpperCase()
    }
  }
  return kecilGede
}

function removeSpaces (str) {
  //code di sini
  var result =""
  for(var l=0; l < str.length; l++){
    if(str[l]!==" "){
        result +=str[l]
    }
  }
  return result
}

function passwordGenerator (name) {
  //code di sini
  var gantiVocal = changeVocals(name)
  var tuker = reverseWord (gantiVocal)
  var ubah = setLowerUpperCase(tuker)
  var akhir = removeSpaces(ubah)
  return akhir.length < 5 ? "Minimal karakter yang diinputkan adalah 5 karakter" : akhir
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'