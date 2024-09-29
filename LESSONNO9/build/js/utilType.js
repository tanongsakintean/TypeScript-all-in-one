"use strict";
// Awaited - helps us with the ReturnType of a Promise
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
/// 
