let strArr = ["beer", "hello", "world!"];

let guitar = ["beer", 1, "hello world!"];

let mixType = ["name", 2020, true]; //you can check mix type . mouse hover this variable

guitar = strArr;

console.log(guitar);

let test = [];
let bands: string[] = [];

bands.push("hello world!");

//tuple
let myTuple: [string, number, boolean] = ["hello world!", 22, true]; // specific type in index
let mixed = ["beer", 22, true];

mixed = myTuple; // can assignment because mixed not require type
console.log(mixed);
// myTuple = mixed; //! error because mixed not require 3 element type
myTuple[1] = 22;

// objects
let myObj: object;
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

// type guitarList = {
//   name: string;
//   active?: boolean; // active?  => type can be boolean and undefined
//   albums: (string | number)[];
// };

interface guitarList {
  name: string;
  active?: boolean; // active?  => type can be boolean and undefined
  albums: (string | number)[];
}

let evh: guitarList = {
  name: "hello world!",
  active: true,
  albums: [22, "22", 2023],
};

let newEvh: guitarList = {
  name: "hello typescript",
  albums: ["22", 2022],
};

evh = newEvh;
console.log(evh);

const greetGuitar = (guitarList: guitarList) => {
  return `hello ${guitarList.name}`;
};

console.log(greetGuitar(evh));

enum Grade { // all in one constant
  U = 1,
  D,
  B,
  C,
  A,
}

console.log(Grade.U);
