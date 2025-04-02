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
function calculate(
   a: number,
   b: number,
   calcFn: (a: number, b: number) => number
) {
   calcFn(a, b);
}

calculate(2, 3, add);

//////////// Creating Custom Types / Type Aliases

//////////// Defining Object Types with Interfaces

//////////// Interfaces vs Custom Types

//////////// Mergin Types

//////////// Being Specific With Literal Types

//////////// Adding Type Guards

//////////// Type Guards & Type Narrowing - A Closer Look

//////////// Making Sense Of Generuc Types
