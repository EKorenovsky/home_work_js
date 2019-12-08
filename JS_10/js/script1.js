function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Cart() {
    let produts = [];
    let prvTotalSum = 0;
    let prvTotalCnt = 0;

    this.addProduct = function(product) {
        produts.push(product);
        prvTotalSum += product["price"];
        prvTotalCnt++;
    };
    this.getTotalSum = function() {
        return prvTotalSum;
    };
    this.getTotalCnt = function() {
        return prvTotalCnt;
    }
}


let pr1 = new Product("pr1", 100);
let pr2 = new Product("pr2", 1000);

let myCart = new Cart();
myCart.addProduct(pr1);
myCart.addProduct(pr2);
console.log(myCart.getTotalSum());
console.log(myCart.getTotalCnt());