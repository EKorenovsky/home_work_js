class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this._produts = [];
        this._prvTotalSum = 0;
        this._prvTotalCnt = 0;
    }

    addProduct(product) {
        this._produts.push(product);
        this._prvTotalSum += product["price"];
        this._prvTotalCnt++;
    };
    getTotalSum() {
        return this._prvTotalSum;
    };
    getTotalCnt() {
        return this._prvTotalCnt;
    }
}


let pr1 = new Product("pr1", 100);
let pr2 = new Product("pr2", 1000);

let myCart = new Cart();
myCart.addProduct(pr1);
myCart.addProduct(pr2);
console.log(myCart.getTotalSum());
console.log(myCart.getTotalCnt());