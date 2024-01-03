const{Given, When, Then} = require('@cucumber/cucumber')

Given('Angka sudah disediakan', function () {
    Num1 = 5;
    Num2 = 10;
    return console.log('angkanya adalah: ' +' '+ Num1+ ' '+'and'+' '+Num2 );;
  });
  When('Dua angka dijumlahkan', function () {
    sum = Num1 + Num2
    return console.log('Hasilnya: ');
  });
  Then('Tampilkan hasilnya', function () {

    return console.log(sum);;
  });