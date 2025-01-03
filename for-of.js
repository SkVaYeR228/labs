'use strict';

function sum(...args) {
    let result = 0;
    for (const arg of args) {
        result += arg;
    }

    return result;
}

console.log(sum(1, 2, 3));