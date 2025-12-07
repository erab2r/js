const products =[
    { id: 1, name: 'Laptop', price: 10000 },
    { id: 2, name: 'Lenavo', price: 35000 },
    { id: 3, name: 'Hp', price: 48000 },
    { id: 4, name: 'Dell', price: 68000 },
    { id: 5, name: 'ASUS', price: 100000 },
    { id: 6, name: 'Laptop', price: 68000 },
]
const result = products.map(product => product.name);
console.log(result);