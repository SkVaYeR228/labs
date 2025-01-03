'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, ...elementsToRemove) {
    for (let i = 0; i < elementsToRemove.length; i++) {
        const element = elementsToRemove[i];
        for (let i = 0; i < array.length; i++) {
            if (array[i] == element) {
                array.splice(i, 1);
            }
        }
    }
}

removeElement(array, 2, 5, 7);
console.log(array);