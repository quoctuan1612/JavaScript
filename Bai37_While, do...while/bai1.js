/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
    if (x === 0){
        return 0;
    } else {
         var result = 0;
         var count = 1;
        while(count < x){
            result += count;
            count += 2;
        }
        return result;
    }
} 
