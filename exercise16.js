function totalDigitRekursif(angka) {
  // you can only write your code here!
  var kalimat = angka.toString()
  if(kalimat.length===1){
    return angka
  }
  else{
    return parseInt(kalimat[0]) + totalDigitRekursif(parseInt(kalimat.substr(1)))
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5