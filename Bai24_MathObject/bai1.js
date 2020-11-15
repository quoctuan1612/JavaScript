// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    return arr.map(function(number){
        if (number%2===0){
            return number*number;
        } else {
            return number;
        }
    });
}