/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */
var number = 1000;
var flag = false;
var bcln;
while(flag === false){
  if (number%3===0 && number%5===0){
    bcln = number;
    flag = true;
  } else {
    number -= 5;
  }
}
console.log(bcln);
