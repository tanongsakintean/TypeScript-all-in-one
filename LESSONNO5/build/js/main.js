"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat"); //!  add 'as string' because typescript don't know addOrConcat function  to return number or string
// Be careful! TS sees no problem - but a string is return
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string; // can't convert number to string
//double casting
10; // tell typescript 10 is as type unknown and tell typescript this type is as type string
// The DOM
//typescript can specific type of html element
const img = document.querySelector("img"); // '!' => this type can't not be null
const myImg = document.getElementById("#img");
// (this type is HTMLElement | null) myImg type is HTMLElement can't set attribute src must set type HTMLImageElement
const nextImg = document.getElementById("#img"); // use for tsx file for react
img.src;
myImg.src;
nextImg.src;
