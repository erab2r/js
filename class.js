class Product {
    constructor(name, price, brand, category) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.category = category;
    }
}

const products = new Product('Laptop', 999.99, 'Dell', 'Electronics');
console.log(products);
