'use strict';

function contract(fn, ...types) {
    const returnType = types.pop();
    return function (...args) {
        if (args.length !== types.length) {
            throw new TypeError(`Expected ${types.length} arguments, but got ${args.length}`);
        }


        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== types[i].name.toLowerCase()) {
                throw new TypeError(`Argument ${i + 1} should be of type ${types[i].name}`);
            }
        }

        const result = fn(...args);
        if (typeof result !== returnType.name.toLowerCase()) {
            throw new TypeError(`Return value should be of type ${returnType.name}`);
        }

        return result;
    };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(5, 2);
console.dir(res);