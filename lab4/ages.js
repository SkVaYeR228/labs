'use strict';

function ages(persons) {
    const lifeAges = {};
    for (const person in persons) {
        if (persons.hasOwnProperty(person)) {
            const { born, died } = persons[person];
            lifeAges[person] = died - born;
        }
    }
    return lifeAges;
}

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));