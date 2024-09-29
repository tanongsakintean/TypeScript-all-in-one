let myName: string;
let age: number;
let isLoading: boolean;
let album: any;
let newAlbum: number | string; /// union type =>  this type can be number and string

myName = "tanongsak";
age = 22;
isLoading = true;
album = "hello world!";
album = 2023;
newAlbum = 2023;
newAlbum = "hello world!";

const sum = (a: number, b: string)=> {
  return a + b;
};

//you can mouse hover on function for know type of return in this function

let postId: number | string;
let isActive: boolean | number;

let re: RegExp = /\w+/g; // you can know this type . you  can mouse hover this you want to know and you can know this type Example: this type is RegExp
