"use strict";
// Type Aliases
//  interface PostId =  stringOrNumber //! interface cannot assign the same type aliases
// Differences Between Type Aliases and Interfaces
//todo Interface
// Extending an interface
// interface Animal {
//   name: string;
// }
// interface Bear extends Animal {
//   honey: boolean;
// }
// const bear = getBear();
// bear.name;
// bear.honey;
//todo Type Aliases
// type Animal = {
//     name: string;
//   }
//   type Bear = Animal & {
//     honey: boolean;
//   }
//   const bear = getBear();
//   bear.name;
//   bear.honey;
// Literal types
let myName; // this is myName is type => "Hello World"
let userName;
userName = "typescript";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello Typescript");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(3, 3));
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(3, 3));
let divide = (c, d) => {
    return c / d;
};
logMsg(divide(3, 3));
// optional parameters
const addAll = (a, b, c) => {
    // c? => can be undefined | number
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default param value
//! type aliases and interface can not be default value
const sumAll = (a = 10, b, c = 2) => {
    // c? => can be undefined | number
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    if (isNumber(value)) {
        return "number";
    }
    return createError("this should never happen!");
};
// logMsg(numberOrString(true));
