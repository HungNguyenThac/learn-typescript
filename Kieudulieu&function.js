// Boolean
let free = true;
free = false;
free = true;
console.log(free);
// Number
let score = 10;
console.log(score);
//string
let element = "abc";
console.log(element);
//templateString
console.log(`Khóa học của chúng ta là ${free}`);
//array number
let arrNumber = [1, 2, 3, 4, 5];
arrNumber.push(5, 6, 7);
console.log(arrNumber.length);
let arrObject1 = [
    { firstName: "Thac Hung", lastName: "Nguyen" },
    { firstName: "Dinh Toan", lastName: "Nguyen" },
];
let arrObject2 = [
    { firstName: "Thac Hung", lastName: "Nguyen" },
    { firstName: "Dinh Toan", lastName: "Nguyen" },
];
let arrObject3 = [
    { firstName: "Thac Hung", lastName: "Nguyen" },
    { firstName: "Dinh Toan", lastName: "Nguyen" },
];
console.log(arrObject1, arrObject2);
//array string
let arrString = ["hello", "goobye"];
arrString.unshift("hi");
console.log(arrString);
//tuple - rằng buộc kiểu dữ liệu chỉ dùng cho array
let x;
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
var STATUS;
(function (STATUS) {
    STATUS[STATUS["start"] = 100] = "start";
    STATUS[STATUS["pendding"] = 101] = "pendding";
    STATUS[STATUS["fullfiled"] = 102] = "fullfiled";
})(STATUS || (STATUS = {}));
let todoStatus = STATUS.start;
let todoPendding = STATUS.pendding;
console.log(todoStatus, todoPendding);
// any - Khai báo kiểu dữ liệu nào đó, cho phép thay đổi kiểu giá trị
let mVariable = 5;
mVariable = "ABC";
console.log(mVariable);
let mArray;
// void - quy định phương thức không có kiểu dữ liệu trả về
// hoặc không thực hiện công việc nào cả
function showInfo() {
    console.log("hello world");
}
showInfo();
// callback trong typeScript:
function callBack(one, two) {
    console.log(one, two);
}
function callBackInTypescript(callBack) {
    callBack("Nguyễn", " Thạc Hưng");
}
callBackInTypescript(callBack);
//type assertions - chuyển đổi giữa các kiểu dữ liệu
let nVariable = "Typescript trainning";
//cách 1:
let hello = nVariable.length;
console.log(hello);
// cách 2:
let total = nVariable.length;
console.log(total);
let objTwo = {
    name: "Nguyen Thac Hung",
    time: "120h",
};
console.log(objTwo);
let course = [96, 2, 34];
console.log(course);
//function - Khai báo hàm trong typescript----------------
//Không trả về:
function functionNoReturn() {
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
function functionTwo() {
    return ["hello", "bye"];
}
console.log(functionTwo());
//Trường hợp 3
function functionReturnNumber2(a, b) {
    let total = a + b;
    return total;
}
console.log(functionReturnNumber2(1, 2));
//trường hợp 4
let myAdd1 = function (x, y) {
    return x + y;
};
console.log(myAdd1(1, 2));
//ví dụ 5
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(10, 20));
//Giá trị mặc định cho các tham số
let myAdd3 = function (x = 1, y = 2) {
    return x + y;
};
console.log(myAdd3());
//Tham số khuyết
let myAdd4 = function (x = "john", y) {
    if (y === undefined) {
        return `My name is ${x}`;
    }
    else {
        return `My name is ${x}, ${y} year old`;
    }
};
console.log(myAdd4("peter"));
//rest params
function showStudenInfo(name, ...course) {
    return name + " study " + course.join(", ");
}
const array = ["es6", "php", "typescript"];
console.log(showStudenInfo("John", ...array)); //spread params
//các dạng khai báo hàm
// 1 named function
function userInfo(name, age) {
    return `My name is ${name}, ${age} year old`;
}
//2 anounymous function
let userInfo02 = function (name = "hello", age = "bye") {
    return `My name is ${name}, ${age} year old`;
};
//3 arrow function
let userInfo03 = (name, age) => {
    return `My name is ${name}, ${age}, ${29} year old`;
};
console.log(userInfo03("Hung", "26"));
//4 fucntion return
let userInfo04 = function (age, ...name) {
    return `My name is ${name.join(", ")}, ${age} year old`;
};
const arrayName = ["hung", "HaNoi", "MienBac", "VietNam"];
console.log(userInfo04(26, ...arrayName));
class ContactApp {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async render() {
        const contacts = await this.adapter.getData();
        console.log(contacts);
    }
}
class MyContactAdapter {
    async getData() {
        //todo: get data from API
        const contact = [
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
