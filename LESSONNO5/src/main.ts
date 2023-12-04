//Type Assert
type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <String | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string; //!  add 'as string' because typescript don't know addOrConcat function  to return number or string

// Be careful! TS sees no problem - but a string is return
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string; // can't convert number to string
//double casting
10 as unknown as string; // tell typescript 10 is as type unknown and tell typescript this type is as type string

// The DOM
//typescript can specific type of html element
const img = document.querySelector("img")!; // '!' => this type can't not be null
const myImg = document.getElementById("#img")! as HTMLImageElement;
// (this type is HTMLElement | null) myImg type is HTMLElement can't set attribute src must set type HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById("#img"); // use for tsx file for react

img.src;
myImg.src;
nextImg.src;
