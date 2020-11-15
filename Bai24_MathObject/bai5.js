/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
    if (a===0 || b===0 || c===0){
        return false;
    } else if (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
        return true;
    } else if (Math.pow(b,2) + Math.pow(c,2) === Math.pow(a,2)){
        return true;
    } else if (Math.pow(c,2) + Math.pow(a,2) === Math.pow(b,2)){
        return true;
    } else {
        return false;
    }
}