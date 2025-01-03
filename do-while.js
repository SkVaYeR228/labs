'use strict';

function sum(...args) {
    let total = 0;
    let i = 0;
    if (args.length === 0) {
        return total;
    }
    do {
        total += args[i];
        i++;
    } while (i < args.length);
    return total;
}

console.log(sum(1, 2, 3));