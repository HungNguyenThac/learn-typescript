// Boolean
let free: boolean = true;
free = false;
free = true;
console.log(free);

// Number
let score: number = 10;
console.log(score);

//string
let element: string = "abc";
console.log(element);

//templateString
console.log(`Khóa học của chúng ta là ${free}`);

//array number
let arrNumber: Array<number> = [1, 2, 3, 4, 5];
arrNumber.push(5, 6, 7);
console.log(arrNumber.length);

//array object
interface Contact1 {
  firstName: string;
  lastName: string;
}
let arrObject1: Array<Contact1> = [
  { firstName: "Thac Hung", lastName: "Nguyen" },
  { firstName: "Dinh Toan", lastName: "Nguyen" },
];

let arrObject2: Contact1[] = [
  { firstName: "Thac Hung", lastName: "Nguyen" },
  { firstName: "Dinh Toan", lastName: "Nguyen" },
];

interface Object {
  firstName: string;
  lastName: string;
}
let arrObject3: Array<Object> = [
  { firstName: "Thac Hung", lastName: "Nguyen" },
  { firstName: "Dinh Toan", lastName: "Nguyen" },
];
console.log(arrObject1, arrObject2);

//array string
let arrString: string[] = ["hello", "goobye"];
arrString.unshift("hi");
console.log(arrString);

//tuple - rằng buộc kiểu dữ liệu chỉ dùng cho array
let x: [string, number, boolean, string[], Object];
x = [
  "hello",
  10,
  false,
  ["hello", "goodbye"],
  { firstName: "Thac Hung", lastName: "Nguyen" },
];
console.log(x);

//Enum - xây dựng khung dữ liệu biểu diễn trạng thái của công việc
// 100 start, 101 pendding, 102 fullfiled
enum STATUS {
  start = 100,
  pendding, // pendding: 500
  fullfiled, // fullfiled: 1000
}
let todoStatus: STATUS = STATUS.start;
let todoPendding: STATUS = STATUS.pendding;
console.log(todoStatus, todoPendding);

// any - Khai báo kiểu dữ liệu nào đó, cho phép thay đổi kiểu giá trị
let mVariable: any = 5;
mVariable = "ABC";
console.log(mVariable);
let mArray: number[];

// void - quy định phương thức không có kiểu dữ liệu trả về
// hoặc không thực hiện công việc nào cả
function showInfo(): void {
  console.log("hello world");
}
showInfo();

// callback trong typeScript:
function callBack(one: string, two: string): void {
  console.log(one, two);
}
function callBackInTypescript(callBack: (param: string, two: string) => void) {
  callBack("Nguyễn", " Thạc Hưng");
}
callBackInTypescript(callBack);

//type assertions - chuyển đổi giữa các kiểu dữ liệu
let nVariable: any = "Typescript trainning";
//cách 1:
let hello = (<string>nVariable).length;
console.log(hello);

// cách 2:
let total = (nVariable as string).length;
console.log(total);

//interface object -- khai báo khung dữ liệu object
// "?": khai báo cũng được, ko khai báo cũng được
interface CourseInterface {
  name: String;
  time: String;
  free?: Boolean;
}

let objTwo: CourseInterface = {
  name: "Nguyen Thac Hung",
  time: "120h",
};
console.log(objTwo);

//interface Array -- khai báo khung dữ liệu array
interface CourseList {
  [index: number]: number;
}

let course: CourseList = [96, 2, 34];
console.log(course);

//function - Khai báo hàm trong typescript----------------

//Không trả về:
function functionNoReturn(): void {
  console.log("No return");
}
functionNoReturn();

// có trả về dữ liệu gì đấy
//trường hợp 1
function functionReturnNumber() {
  return 1001;
}
let test = functionReturnNumber();
console.log(test);

//Trường hợp 2
function functionTwo(): string[] {
  return ["hello", "bye"];
}
console.log(functionTwo());

//Trường hợp 3
function functionReturnNumber2(a: number, b: number) {
  let total = a + b;
  return total;
}
console.log(functionReturnNumber2(1, 2));

//trường hợp 4
let myAdd1 = function (x: number, y: number): number {
  return x + y;
};
console.log(myAdd1(1, 2));
//ví dụ 5
let myAdd2: (x: number, y: number) => number = function (x: 10, y: 20): number {
  return x + y;
};
console.log(myAdd2(10, 20));

//Giá trị mặc định cho các tham số
let myAdd3 = function (x: number = 1, y: number = 2): number {
  return x + y;
};
console.log(myAdd3());

//Tham số khuyết
let myAdd4 = function (x: string = "john", y?: number): string {
  if (y === undefined) {
    return `My name is ${x}`;
  } else {
    return `My name is ${x}, ${y} year old`;
  }
};
console.log(myAdd4("peter"));

//rest params
function showStudenInfo(name: string, ...course: string[]): string {
  return name + " study " + course.join(", ");
}

const array = ["es6", "php", "typescript"];
console.log(showStudenInfo("John", ...array)); //spread params

//các dạng khai báo hàm
// 1 named function
function userInfo(name: string, age: number): string {
  return `My name is ${name}, ${age} year old`;
}

//2 anounymous function
let userInfo02: (name: string, age: string) => string = function (
  name = "hello",
  age = "bye"
): string {
  return `My name is ${name}, ${age} year old`;
};

//3 arrow function
let userInfo03 = (name: string, age: string) => {
  return `My name is ${name}, ${age}, ${29} year old`;
};
console.log(userInfo03("Hung", "26"));
//4 fucntion return
let userInfo04: (age: number, ...name: string[]) => string = function (
  age,
  ...name
) {
  return `My name is ${name.join(", ")}, ${age} year old`;
};

const arrayName = ["hung", "HaNoi", "MienBac", "VietNam"];
console.log(userInfo04(26, ...arrayName));

interface Contact {
  name: string;
  phone: string;
}

interface ContactAdapter {
  getData: () => Promise<Contact[]>;
}

class ContactApp {
  adapter: ContactAdapter;

  constructor(adapter: ContactAdapter) {
    this.adapter = adapter;
  }

  async render() {
    const contacts: Contact[] = await this.adapter.getData();
    console.log(contacts);
  }
}

class MyContactAdapter implements ContactAdapter {
  async getData() {
    //todo: get data from API
    const contact: Contact[] = [
      { name: "A", phone: "123" },
      {
        name: "B",
        phone: "456",
      },
    ];
    return contact;
  }
}

const adapter = new MyContactAdapter();

const app = new ContactApp(adapter);

type test1 = "hello" | "bye";

interface Hello1 {
  name: string;
  address: string;
}

interface Hello2 {
  live: boolean;
  phoneNumber: number;
}

interface Test2 extends Hello1, Hello2 {}

const hello3: Test2[] = [
  {
    name: "hung",
    address: "asdfasdf",
    live: true,
    phoneNumber: 0965882467,
  },
];

function fail(msg: string): never {
  throw new Error(msg);
}

interface Student {
  id: number;
  name: string;
  age: number;
}

const test4: Student = {
  id: 1,
  name: "hung",
  age: 10,
};

function createStudent({ id, name, age }: Student) {
  console.log(id, name, age);
}

createStudent({
  id: 1,
  name: "hung",
  age: 10,
} as Student);
