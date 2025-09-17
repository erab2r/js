const person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
}
for(let key in person) {
    console.log(key);
}
for(let key of Object.entries(person)) {
    console.log(key);
}
for(let [key,values] of Object.entries(person)) {
    console.log(`key: ${key}, values: ${values}`);
}