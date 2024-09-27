// learning OOP in javascript
class InventoryManagementSystem {
    constructor(product, transportation) {
        this.product = product;
        this.transportation = transportation;
    }

    getProduct(product) {
        console.log(this.product);
    }

    removeProduct(product) {
        // code to remove product from inventory
    }
}

const product_list = ["car", "TV", "toy", "teddy", "bear"];
console.log(product_list);
