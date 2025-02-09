export default function TypeScriptBasicsPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>TypeScript Fundamentals</h1>
      
      <p>
        TypeScript adds static typing to JavaScript, enabling better tooling, cleaner code, and fewer runtime errors. Understanding TypeScript fundamentals is essential for modern web development.
      </p>

      <h2>Basic Types</h2>
      <pre><code className="language-typescript">{`// Primitive types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Special types
let notSure: any = 4;
let u: undefined = undefined;
let n: null = null;
let v: void = undefined;
let never: never = (() => { throw new Error(); })();

// Object type
let obj: object = { key: "value" };
let user: { name: string; age: number } = {
  name: "John",
  age: 30
};`}</code></pre>

      <h2>Interfaces and Types</h2>
      <pre><code className="language-typescript">{`// Interface definition
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
  readonly id: number; // Read-only property
}

// Type aliases
type Point = {
  x: number;
  y: number;
};

// Union types
type Status = "pending" | "approved" | "rejected";

// Intersection types
type Employee = User & {
  employeeId: string;
  department: string;
};

// Extending interfaces
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}`}</code></pre>

      <h2>Generics</h2>
      <pre><code className="language-typescript">{`// Generic functions
function identity<T>(arg: T): T {
  return arg;
}

// Generic interfaces
interface Container<T> {
  value: T;
  getValue(): T;
}

// Generic classes
class Queue<T> {
  private data: T[] = [];
  
  push(item: T) {
    this.data.push(item);
  }
  
  pop(): T | undefined {
    return this.data.shift();
  }
}

// Generic constraints
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}`}</code></pre>

      <h2>Advanced Types</h2>
      <pre><code className="language-typescript">{`// Mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Utility types
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Type guards
function isString(value: any): value is string {
  return typeof value === "string";
}

// Discriminated unions
interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What are the benefits of using TypeScript?</li>
        <li>How do interfaces differ from type aliases?</li>
        <li>When would you use generics?</li>
        <li>How do you handle type inference?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use strict mode with TypeScript</li>
        <li>Prefer interfaces for public APIs</li>
        <li>Use type inference when possible</li>
        <li>Leverage utility types</li>
        <li>Document complex types</li>
        <li>Avoid using 'any' type</li>
      </ul>
    </article>
  );
} 