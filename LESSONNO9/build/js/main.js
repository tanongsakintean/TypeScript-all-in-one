"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class student {
    constructor(firstName, lastName, age, studentId) {
        this._firstName = "";
        this._lastName = "";
        this._age = 0;
        this._studentId = "";
        this._age = age;
        this._studentId = studentId;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    getFullName() {
        return this._firstName + " " + this._lastName;
    }
}
let stu1 = new student("tanongsak", "intean", 23, "6406021622095");
console.log(stu1.getFullName());
let users = {
    username: "tanongsakintean"
};
users.email; //Users.email?: string | undefined
//generics type 
function increment(a, b) {
    let result = 0;
    if (typeof a.every(it => typeof it == "number")) {
        result = a.reduce((p, b) => p + b);
    }
    return b + result;
}
function map(arr, callback) {
    return arr.map(callback);
}
function sort(arr, callback) {
    return arr.sort(callback);
}
const queue = {
    data: [],
    enqueue(v) {
        this.data.push(v);
        return this.data;
    },
    dequeue() {
        this.data.shift();
        return this.data;
    },
};
queue.enqueue("122");
queue.enqueue("1122");
console.log(queue.data);
console.log(sort([2, 3, 41, 6, 7, 8, 1, 5, 7, 0], (a, b) => a - b));
console.log(sort([2, 3, 41, 6, 7, 8, 1, 5, 7, 0], (a, b) => b - a));
console.log(map(["1", "2", "3"], (s) => parseInt(s)));
console.log(increment([1, 2, 3], 5));
const reactangle = {
    color: "red",
    width: "20",
    height: "30",
    area(a, b) {
        return 1 / 2 * a * b;
    },
};
console.log("area reactangle = ", reactangle.area(12, 20));
const updateAssignment = (assign, propsToUpdate /// this is some property in type from type in Partial in this case is Assignment
) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
/// Required and Readonly
const recordAssignment = (assign) => {
    /// this is some property in type for required value not can be undefined
    // send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 88; error type can't edit type must readonly
console.log(assignGraded);
// recordAssignment(assignGraded); //! error because verified can be undefined
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    // use for set key and value
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "D",
    Kelly: "A",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
const students = { math: "D", eng: "A" };
const studentsHight = { math: "A", eng: "B" };
// ReturnType
// type newAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
let user = [];
fetchUsers().then((users) => {
    user = [...users];
    console.log(user);
});
let animal = {
    name: "dog" // age and sound is optional properties
};
let selectSomePropAnimal = {
    name: "cat",
    sound: "meao meao!"
};
let omitSomePropAnimal = {
    age: 10,
    sound: "buff! buff!"
};
let recordAnimal = {
    dog: {
        sound: "buff! buff!"
    },
    cat: {
        sound: "meao! meao!"
    },
    fish: {
        sound: "pok! pok!"
    },
    carb: {
        sound: "bu! bu!"
    },
};
let color = {
    gray: "#f1f2f3",
    white: "#ffffff",
    blue: "#000FFF"
};
const funFullNmme = (arg1, arg2) => {
    return arg1 + " " + arg2;
};
let parametersArgsFunction = ["11", "22"];
let returnTypeFuntion = "return type function";
/// Awaited Type ===  use with asynchronous 
function getFullName() {
    return __awaiter(this, void 0, void 0, function* () {
        return "string asynchronous ";
    });
}
function sayHello(message) {
    return message;
}
/// constructorParameter Type ===  return args type of constructor 
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(v) {
        this.name = v;
    }
    set setAge(v) {
        this.age = v;
    }
    get getAge() {
        return this.age;
    }
}
let person = new Person("beer", 23);
console.log(person.getName);
/// NoInfer type === กรณีที่กรอก properties ที่เป็น type optional จะบังคับค่าให้ตรงกับ format ที่เราระบุไว้เบื้องต้น ในตัวอย่างคือ type C ่
console.log("----------------------------------------------------------------------------");
function createStreetLight(colors, defaultColor) {
    console.log(defaultColor);
}
createStreetLight(["red", "yellow", "green"], "red"); // OK
// createStreetLight(["red", "yellow", "green"], "blue");  // Error
