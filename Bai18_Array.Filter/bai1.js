// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    var result = arr.filter(function(number){
        return number > 4;
    });
    return result;
}
