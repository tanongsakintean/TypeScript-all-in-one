"use strict";
let strArr = ["beer", "hello", "world!"];
let guitar = ["beer", 1, "hello world!"];
let mixType = ["name", 2020, true]; //you can check mix type . mouse hover this variable
guitar = strArr;
console.log(guitar);
let test = [];
let bands = [];
bands.push("hello world!");
//tuple
let myTuple = ["hello world!", 22, true]; // specific type in index
let mixed = ["beer", 22, true];
mixed = myTuple; // can assignment because mixed not require type
console.log(mixed);
// myTuple = mixed; //! error because mixed not require 3 element type
myTuple[1] = 22;
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    props1: "hello world!",
    props2: 22,
    props3: true,
};
exampleObj.props1 = "beer";
let evh = {
    name: "hello world!",
    active: true,
    albums: [22, "22", 2023],
};
let newEvh = {
    name: "hello typescript",
    albums: ["22", 2022],
};
evh = newEvh;
console.log(evh);
const greetGuitar = (guitarList) => {
    return `hello ${guitarList.name}`;
};
console.log(greetGuitar(evh));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade);
