'use strict';

const sum = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
};

console.log(sum(1, 2, 3));