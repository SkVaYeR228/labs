"use strict";

const pipeRight = (...fns) => {
    const handlers = [];
    const composed = (x) => {
        try {
            return fns.reduceRight((acc, fn) => {
                if (typeof fn !== "function") {
                    throw new Error("All compose arguments should be functions");
                }
                return fn(acc);
            }, x);
        } catch (error) {
            handlers.forEach((handler) => handler(error));
            return null;
        }
    };

    composed.on = (name, handler) => {
        if (name === "error") {
            handlers.push(handler);
        }
    };

    return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipeRight(inc, twice, cube);
const x = f(5);

console.log(x);