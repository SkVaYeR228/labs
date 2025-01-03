'use strict';

function iterate(object, callback) {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            callback(key, object[key], object);
        }
    }
}

const obj = { a: 1, b: 2, c: 3 };

iterate(obj, (key, value) => {
    console.log({ key, value });
});