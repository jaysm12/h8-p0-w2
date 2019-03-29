
////////////////// 1. BARISAN BINTANG /////////////////////

console.log('BARISAN BINTANG');

var star = '*'

for(var row = 1; row <= 5; row++){
  console.log(star)
}

//////////////// 2. BARISAN BINTANG DENGAN NESTED LOOP /////////////

console.log('BARISAN BINTANG NESTED LOOP');

var row2 = 5
for (var i = 0; i < row2; i++){
  var star = '*'   
  for (var j = 0; j < row2; j++){
       star = star + '*'
   }
   console.log(star)
}


//////////////// 3. TANGGA BINTANG DENGAN NESTED LOOP /////////////
console.log('TANGGA BINTANG');

var star = '*'
var jumlahBintang = ''


for(var row3 = 5; row3 > 0; row3--){
  for(var rowNew = 1; rowNew > 0; rowNew--){
    jumlahBintang = jumlahBintang + star
  }
  console.log(jumlahBintang)
}