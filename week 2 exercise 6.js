///////// 1. LOOPING MENGGUNAKAN WHILE /////////////////////////

var int = 2

console.log('LOOPING PERTAMA')
while(int <= 20){
  console.log(int + ' - ' + 'I love coding')
  int += 2
}


var intBaru = 20
console.log('LOOPING KEDUA')
while(intBaru > 0){
  console.log(intBaru + ' - ' + 'I will become fullstack developer')
  intBaru -= 2
}

// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer


////////// 2. LOOPING MENGGUNAKAN FOR ///////////////////////////////

console.log('LOOPING PERTAMA')
for(var i = 0; i <= 20; i++){
  console.log(i + ' - ' + 'I love coding')
}

console.log('LOOPING KEDUA')
for(var i = 20; i > 0; i--){
  console.log(i + ' - ' + 'I will become fullstack developer')
}

// LOOPING PERTAMA
// 1 - I love coding
// 2 - I love coding
// 3 - I love coding
// 4 - I love coding
// 5 - I love coding
// 6 - I love coding
// 7 - I love coding
// 8 - I love coding
// 9 - I love coding
// 10 - I love coding
// 11 - I love coding
// 12 - I love coding
// 13 - I love coding
// 14 - I love coding
// 15 - I love coding
// 16 - I love coding
// 17 - I love coding
// 18 - I love coding
// 19 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 19 - I will become fullstack developer
// 18 - I will become fullstack developer
// 17 - I will become fullstack developer
// 16 - I will become fullstack developer
// 15 - I will become fullstack developer
// 14 - I will become fullstack developer
// 13 - I will become fullstack developer
// 12 - I will become fullstack developer
// 11 - I will become fullstack developer
// 10 - I will become fullstack developer
// 9 - I will become fullstack developer
// 8 - I will become fullstack developer
// 7 - I will become fullstack developer
// 6 - I will become fullstack developer
// 5 - I will become fullstack developer
// 4 - I will become fullstack developer
// 3 - I will become fullstack developer
// 2 - I will become fullstack developer
// 1 - I will become fullstack developer



///////////////// 3. ANGKA GANJIL GENAP /////////////////


var loop = 1

while(loop <= 100){

  if(loop % 2 == 0){
    console.log(loop + " GENAP")
  } else {
    console.log(loop + " GANJIL")
  }
  loop++


}

for(var loop = 1; loop <= 100; loop = loop + 2){
  if(loop % 3 == 0){
    console.log(loop + " angka kelipatan 3")
  }
}


for(var loop = 1; loop <= 100; loop = loop + 5){
  if(loop % 6 == 0){
    console.log(loop + " angka kelipatan 6")
  }
}


for(var loop = 1; loop <= 100; loop = loop + 9){
  if(loop % 10 == 0){
    console.log(loop + " angka kelipatan 10")
  }
}



//contoh - ganjil genap
//counter sekarang = 1,
//output
// "GANJIL"
//counter sekarang = 2,
//output
// "GENAP"
// dan seterusnya :)

//contoh - untuk pertambahan counter 2
//counter sekarang = 1,
//output
// ""
//counter sekarang = 3,
//output
// "3 KELIPATAN 3"
// dan seterusnya :)

//contoh - untuk pertambahan counter 5
//counter sekarang = 1,
//output
// ""
//counter sekarang = 6,
//output
// "6 KELIPATAN 6"
// dan seterusnya :)

//contoh - untuk pertambahan counter 9
//counter sekarang = 1,
//output
// ""
//counter sekarang = 10,
//output
// "10 KELIPATAN 10"
// dan seterusnya :)