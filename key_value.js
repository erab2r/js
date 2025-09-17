const person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
}
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// Object.seal(person);  // obj r properties add kora jabe na,modify kora jabe
//Object.freeze(person); // obj r properties add kora jabe na,modify kora jabe na
person.country = 'Fantasy Land';
console.log(person);