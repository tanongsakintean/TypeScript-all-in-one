class Coder {
  secondLang!: string; // secondLang! => is not can't be undefined

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
////////////////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
  stop():string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }

  stop(): string {
     return "stop" 
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
console.log(Page.stop());
////////////////////////////////////////

class Peeps {
  static count: number = 0; // is variable of class not object or instance
  public id: number;

  static getCount(): number {
    return Peeps.count;
  }

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count); // show count all in class
console.log(Steve.id); // 2
/////////////////////////////////////////

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    // is getter in concept OOP
    return this.dataState;
  }

  public set data(value: string[]) {
    // is setter in concept OOP
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      // return this.dataState  can't return value in setter
      return;
    } else throw new Error("Parm is not an array of strings");
  }
}

const myBrands = new Bands();
myBrands.data = ["Nel Yong", "Led Zep"]; // is setter
console.log(myBrands.data); // is getter
myBrands.data = [...myBrands.data, "ZZ Top"];
console.log(myBrands.data);
