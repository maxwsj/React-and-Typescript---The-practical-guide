//////////// Working with Types: Type Inference & Explicit Type Annotations
let userName = 'Max';

// useName = 34;
userName = 'Max';

//////////// Basic Primitive Types
let isValid = true;

//////////// Invoking The TypeScript Compiler
// tsc --init
// tsc

//////////// Combining Types Union Types (Alternative Types)
let userID: string | number; // Union Types
userID = 'Max';
userID = 2;

//////////// Working with Object Types
let user: {
   name: string;
   age: number;
   isAdmin: boolean;
   id: string | number;
};

user = {
   name: 'Max',
   age: 34,
   isAdmin: true,
   id: 'abc',
};

//////////// Working with Array Types
// let hobbies: Array<string>;
let hobbies: string[];

hobbies = ['Sports', 'Cooking', 'Reading'];

//////////// Adding Types to Functions - Parameters & Return Value Types
function add(a: number, b: number): number {
   const result = a + b;
   console.log(result);
   return result;
}

//////////// Defining Function Types
function calculate(a: number, b: number, calcFn: AddFn) {
   calcFn(a, b);
}

calculate(2, 3, add);

//////////// Creating Custom Types / Type Aliases
type AddFn = (a: number, b: number) => number;

//////////// Defining Object Types with Interfaces
interface Credentials {
   password: string;
   email: string;
}

let creds: Credentials;

creds = {
   password: 'abc',
   email: 'teste@example.com',
};

//////////// Interfaces vs Custom Types
class AuthCredentials implements Credentials {
   email: string;
   password: string;
   userName: string;
}

//////////// Mergin Types
type Admin = {
   permissions: string[];
};

type AppUser = {
   userName: string;
};

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
   permissions: ['login'],
   userName: 'Max',
};

//// Interfaces
interface IAdmin {
   permissions: string[];
}

interface IAppUser {
   userName: string;
}

interface IAppAdmin extends IAdmin, IAppUser {}

let iAdmin: AppAdmin;

iAdmin = {
   permissions: ['login'],
   userName: 'Max',
};

//////////// Being Specific With Literal Types
let role: 'admin' | 'user' | 'editor'; // 'admin', 'user', 'editor'

role = 'user';

//////////// Adding Type Guards
type Role = 'admin' | 'user' | 'editor';

let rol: Role;

rol = 'user';

function performAction(action: string, role: Role) {
   if (role === 'admin') {
      // ...
   }
}

//////////// Making Sense Of Generic Types
let roles: Array<Role>;

type DataStorage<T> = {
   storage: T[];
   add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
   storage: [],
   add(data) {
      this.storage.push(data);
   },
};
