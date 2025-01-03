'use strict';

const sum = (...args) => {
    let total = 0;
    let i = 0;
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
};

console.log(sum(1, 2, 3));