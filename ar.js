const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Tablet', price: 299.99 },
    { id: 4, name: 'Smartwatch', price: 199.99 },
    { id: 5, name: 'Smartwatch', price: 899.99 },
    { id: 6, name: 'Smartwatch', price: 799.99 },
    { id: 7, name: 'Smartwatch', price: 100}
];  

products.forEach(product => {
    if(product.name === 'Smartwatch') {
        console.log(product);
    }
})
const newProduct = products.filter(product => product.price > 200);
console.log(newProduct);