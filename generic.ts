function generic(x: number): number {
  return 101;
}

function showGenericString(x: string): string {
  return x;
}

// generic basic
function exampleGeneric<T>(x: T): T {
  return x;
}

console.log(exampleGeneric<string>("hello"));

//generic OOP --> method contructor
class StudyGeneric {
  static prinArray<T>(params: T[]): void {
    console.log(params);
  }
}

StudyGeneric.prinArray<number>([1, 2, 3, 4, 5]);
StudyGeneric.prinArray<string>(["Xin chao cac ban"]);
StudyGeneric.prinArray<any>([12, 2321, 12312, "Xin chao cac ban", false, true]);

// generic OOP
class Product<A, B, C> {
  id: A;
  name: B;
  price: C;

  constructor(id: A, name: B, price: C) {
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
