/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
    return arr.reduce(function(result, object){
        if (object in result){
            result[object]++;
        }
        else {
            result[object]=1;
        }
        return result;
    }, {});
}

