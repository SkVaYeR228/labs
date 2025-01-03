'use stict';

const array1 = [7, 3, 10, 5, 0];
const array2 = [0, 5];

function difference(array1, array2) {
    const set2 = new Set(array2);
    return array1.filter(item => !set2.has(item));
}

const result = difference(array1, array2);
console.log(result);