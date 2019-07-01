function sorting(arrNumber) {
  // code di sini
for(var i=0; i < arrNumber.length;i++){
    for(var j=i+1; j < arrNumber.length;j++){
        if(arrNumber[i] > arrNumber[j]){
            var temp = arrNumber[i]
            arrNumber[i] = arrNumber[j]
            arrNumber[j] = temp
        }
    }
}
  //console.log(arrNumber)
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  var max = -1
  var counter = 0
  for(var i =0; i < arrNumber.length; i++){
      if(arrNumber[i] > max){
          max = arrNumber[i]
      }
  }
  for(var j=0; j<arrNumber.length; j++){
      if(arrNumber[j]===max){
          counter++
      }
  }
  return max === -1 ? "''" : "Angka paling besar adalah "+max+ " dan jumlah kemunculan sebanyak "+counter+ " kali"
  
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  //console.log(listSort)
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''