/// Generics
const echo = <T>(arg: T): T => arg; // <T> is template type  example t is string => parameter type is string , return string

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("Beer"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Beer" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    /// check is Array and  isEmpty
    return {
      arg,
      is: false,
    };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    // check isObj and  object is empty
    // "   !Object.keys(arg as keyof T) => Object.key return array is key of object
    return {
      arg,
      is: false,
    };
  }
  return {
    arg,
    is: !!arg, /// '!!arg' => check string isNotEmpty? return true | false
  };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Beer"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Beer" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    /// check is Array and  isEmpty
    return {
      value: arg,
      is: false,
    };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    // check isObj and  object is empty
    // "   !Object.keys(arg as keyof T) => Object.key return array is key of object
    return {
      value: arg,
      is: false,
    };
  }
  return {
    value: arg,
    is: !!arg, /// '!!arg' => check string isNotEmpty? return true | false
  };
};

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  /// extends HasID == must have type id :number
  /// process the user with logic here
  return user;
};

console.log(processUser({ id: 1, name: "Beer" }));
// console.log(processUser({ name: "Opor" })); /// error is must have id in object because processUser have extends HasId

const getUsersProperty = <T extends HasID, K extends keyof T>( /// this function is return value of property of array this
  /// K extends keyof T => K is key of type type example name:sting = key == name
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "address"));
console.log(getUsersProperty(usersArray, "email"));

class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("Beer");
console.log(store.state);
store.state = "Opor";
// store.state = 12; /// error this class state is string

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Beer", 15, true];
console.log(myState.state);
