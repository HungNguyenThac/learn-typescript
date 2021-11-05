function generic(x) {
    return 101;
}
function showGenericString(x) {
    return x;
}
// generic basic
function exampleGeneric(x) {
    return x;
}
console.log(exampleGeneric("hello"));
//generic OOP --> method contructor
class StudyGeneric {
    static prinArray(params) {
        console.log(params);
    }
}
StudyGeneric.prinArray([1, 2, 3, 4, 5]);
StudyGeneric.prinArray(["Xin chao cac ban"]);
StudyGeneric.prinArray([12, 2321, 12312, "Xin chao cac ban", false, true]);
// generic OOP
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
let product1 = new Product("ID1", "Product 1", 20);
let product2 = new Product(20, 20, 20);
let product3 = new Product(12, 12, 12);
product1.showProductInfo();
product2.showProductInfo();
product3.showProductInfo();
