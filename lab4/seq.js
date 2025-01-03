'use strict';

function seq(...fns) {
    return function (initVal) {
        return fns.reduce((acc, fn) => fn(acc), initVal);
    };
}

console.table(seq(x => x * 2, x => x + 7)(5));