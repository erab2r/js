const Sanaa = {
    name: 'Ranaa',
    age: 25,
    friends : ["hero alom","bappa"],
    status : "Not found",
}
const {name,age,friends,status} = Sanaa;
console.log(name);

const person = ["hero alom",{name: "sayed"},"bappa"];
const [first,second,third] = person;
console.log(first);