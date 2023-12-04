// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type GuitarList = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

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
let myName: "Hello World!"; // this is myName is type => "Hello World"

let userName: "typescript" | "javascript" | "react";
userName = "typescript";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello Typescript");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

logMsg(subtract(3, 3));

// functions in type
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (c, d) => {
  return c * d;
};

logMsg(multiply(3, 3));

// functions in interface
interface mathFunctions {
  (a: number, b: number): Number;
}

let divide: mathFunctions = (c, d) => {
  return c / d;
};

logMsg(divide(3, 3));

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  // c? => can be undefined | number
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

//default param value
//! type aliases and interface can not be default value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  // c? => can be undefined | number
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3, 4));

// type never => don't have return this
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;

    if (i > 100) {
      break;
    }
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") {
    return "string";
  }
  if (isNumber(value)) {
    return "number";
  }

  return createError("this should never happen!");
};

// logMsg(numberOrString(true));
