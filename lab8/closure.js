'use strict';

const store = (value) => () => value

const read = store(52);
const value = read();

console.log(value);