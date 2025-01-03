'use strict';

const removeElement = (array, item) => {
    const index = array.indexOf(item);
    if (index > -1) {
        return array.splice(index, 1);
    }
}
const array = [1, 2, 3, 3, 4, 5, 6, 7, 7];
removeElement(array, 7)
console.log(array)