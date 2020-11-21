/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    var number = arr[0];
    for (var i=1; i<arr.length; i++){
        if (number<arr[i]){
            number = arr[i];
        }
    }
    return number;
}
