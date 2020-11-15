// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
    var result = arr.sort(function (a, b){
        return a-b;
    });
    return result;
}