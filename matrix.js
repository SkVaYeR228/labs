'use strict';

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function max(array) {
    let m = array[1][1];
    for (let i = 0; i < array.length; i++) {
        for (let a = 0; a < array[i].length; a++) {
            m = m < array[i][a] ? array[i][a] : m;
        }
    }

    return m;
}

console.log(max(array));