export default function HoistingPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Hoisting in JavaScript</h1>
      
      <p>
        Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the compilation phase. Understanding hoisting is crucial for avoiding unexpected behavior in your code.
      </p>

      <h2>Variable Hoisting</h2>
      <pre><code className="language-javascript">{`// Variable hoisting with var
console.log(x); // undefined (not ReferenceError)
var x = 5;

// What's actually happening:
var x;
console.log(x);
x = 5;

// let and const are hoisted but not initialized
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 5;`}</code></pre>

      <h2>Function Hoisting</h2>
      <pre><code className="language-javascript">{`// Function declaration hoisting
sayHello(); // "Hello!" (works)

function sayHello() {
  console.log("Hello!");
}

// Function expression hoisting
sayGoodbye(); // TypeError: sayGoodbye is not a function

var sayGoodbye = function() {
  console.log("Goodbye!");
};

// Arrow functions (same as function expressions)
sayHi(); // TypeError: sayHi is not a function

var sayHi = () => {
  console.log("Hi!");
};`}</code></pre>

      <h2>Class Hoisting</h2>
      <pre><code className="language-javascript">{`// Class declarations are not hoisted
const p = new Person(); // ReferenceError

class Person {
  constructor() {
    this.name = "John";
  }
}

// Class expressions are not hoisted either
const Animal = class {
  constructor() {
    this.type = "unknown";
  }
};`}</code></pre>

      <h2>Temporal Dead Zone (TDZ)</h2>
      <pre><code className="language-javascript">{`// TDZ with let and const
{
  console.log(x); // ReferenceError
  let x = 1;
}

// Multiple declarations
var x = 1;
{
  console.log(x); // ReferenceError (TDZ)
  let x = 2;
}

// const behavior
console.log(API_KEY); // ReferenceError
const API_KEY = "abc123";`}</code></pre>

      <h2>Function and Variable Precedence</h2>
      <pre><code className="language-javascript">{`// Function declarations take precedence over variable declarations
console.log(foo); // [Function: foo]

var foo = "bar";
function foo() {
  return "foo";
}

// But variable assignments still override
console.log(foo); // "bar"`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>Why does JavaScript hoist declarations?</li>
        <li>How does hoisting differ between var, let, and const?</li>
        <li>What is the Temporal Dead Zone?</li>
        <li>How does hoisting work with function expressions vs declarations?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Always declare variables at the top of their scope</li>
        <li>Use const and let instead of var</li>
        <li>Declare functions before using them</li>
        <li>Be aware of hoisting when using function declarations</li>
        <li>Understand TDZ when using let and const</li>
      </ul>
    </article>
  );
} 