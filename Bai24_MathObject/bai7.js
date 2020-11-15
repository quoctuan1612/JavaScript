/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
    var arr = [];
    arr.push((Math.sin(number)).toFixed(3));
    arr.push((Math.cos(number)).toFixed(3));
    arr.push((Math.tan(number)).toFixed(3));
    return arr;
}
