'use strict';


const array = () => {

    let arr = [];
    const obj = (i) => {
        if (i === undefined) {
            return arr;
        }
        return arr[i];
    };

    obj.push = (value) => {
        arr.push(value);
    };

    obj.pop = () => {
        return arr.pop();
    };

    return obj;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0))
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());