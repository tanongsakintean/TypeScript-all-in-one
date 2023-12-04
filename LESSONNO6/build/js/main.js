"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder("Dave", "rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
////////////////////////////////////////
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
Peeps.count = 0; // is variable of class not object or instance
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count); // show count all in class
console.log(Steve.id); // 2
/////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        // is getter in concept OOP
        return this.dataState;
    }
    set data(value) {
        // is setter in concept OOP
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            // return this.dataState  can't return value in setter
            return;
        }
        else
            throw new Error("Parm is not an array of strings");
    }
}
const myBrands = new Bands();
myBrands.data = ["Nel Yong", "Led Zep"]; // is setter
console.log(myBrands.data); // is getter
myBrands.data = [...myBrands.data, "ZZ Top"];
console.log(myBrands.data);
