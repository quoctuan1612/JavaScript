// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    var result = arr.filter(function(number){
        return number%2===0;
    });
    return result;
}
