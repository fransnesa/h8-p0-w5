function kaliTerusRekursif(angka) {
  // you can only write your code here!
    if(angka < 10){
        return angka
    }
    else{
        var hasilKali = kaliSemua(angka)
        return kaliTerusRekursif(hasilKali)
    }
}

function kaliSemua(angka){
    if(angka < 10) {
        return angka
    }
    var sisa = angka % 10
    return sisa * kaliSemua((angka - sisa) / 10)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6