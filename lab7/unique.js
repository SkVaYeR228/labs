'use strict';

const unique = (array) => {
    const updatedArray = []
    for (const element of array) {
        if (!updatedArray.includes(element)) updatedArray.push(element)
    }
    return updatedArray
}

const array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7];
console.log(unique(array));