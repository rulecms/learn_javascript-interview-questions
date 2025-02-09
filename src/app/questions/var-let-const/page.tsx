export default function VarLetConstPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>var, let, and const in JavaScript</h1>
      
      <p>
        Understanding the differences between var, let, and const is crucial for proper variable declaration and scope management in JavaScript.
      </p>

      <h2>var Declaration</h2>
      <pre><code className="language-javascript">{`// Function scope
function example() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable
    console.log(x);  // 2
  }
  console.log(x);    // 2
}

// Hoisting
console.log(hoisted);  // undefined
var hoisted = 'value';

// Global object property
var globalVar = 'I am global';
console.log(window.globalVar);  // 'I am global'

// Re-declaration allowed
var user = 'John';
var user = 'Jane';  // allowed`}</code></pre>

      <h2>let Declaration</h2>
      <pre><code className="language-javascript">{`// Block scope
function example() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);    // 1
}

// Temporal Dead Zone (TDZ)
console.log(blocked);  // ReferenceError
let blocked = 'value';

// No global object property
let globalLet = 'I am not global';
console.log(window.globalLet);  // undefined

// No re-declaration
let user = 'John';
let user = 'Jane';  // SyntaxError`}</code></pre>

      <h2>const Declaration</h2>
      <pre><code className="language-javascript">{`// Must be initialized
const EMPTY;  // SyntaxError

// Cannot be reassigned
const PI = 3.14;
PI = 3.14159;  // TypeError

// But objects are mutable
const user = { name: 'John' };
user.name = 'Jane';  // Allowed
user = { name: 'Jim' };  // TypeError

// Array mutation
const numbers = [1, 2, 3];
numbers.push(4);     // Allowed
numbers = [5, 6, 7]; // TypeError

// Object freeze for immutability
const frozenUser = Object.freeze({
  name: 'John'
});
frozenUser.name = 'Jane';  // No effect in strict mode`}</code></pre>

      <h2>Choosing Between Them</h2>
      <pre><code className="language-javascript">{`// Use const for values that shouldn't change
const API_KEY = 'abc123';
const CONFIG = Object.freeze({
  endpoint: 'https://api.example.com'
});

// Use let for values that need to change
let counter = 0;
counter++;

// Avoid var in modern JavaScript
// Bad
var index = 0;
// Good
let index = 0;

// Loop example
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
} // Prints: 0, 1, 2

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
} // Prints: 3, 3, 3`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>Why was let introduced when we already had var?</li>
        <li>What is the Temporal Dead Zone?</li>
        <li>How do var, let, and const affect the global object?</li>
        <li>When would you use const vs let?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use const by default</li>
        <li>Use let when you need to reassign</li>
        <li>Avoid var in modern code</li>
        <li>Be aware of block scope vs function scope</li>
        <li>Consider Object.freeze for true constants</li>
        <li>Understand TDZ implications</li>
      </ul>

      <h2>Edge Cases and Gotchas</h2>
      <pre><code className="language-javascript">{`// const with objects
const obj = {};
obj.prop = 'value';  // Works
Object.defineProperty(obj, 'readonly', {
  value: 'cant change this',
  writable: false
});

// let in loops
for (let i = 0; i < 3; i++) {
  let i = 10;  // Shadows loop variable
  console.log(i);  // 10, 10, 10
}

// var in modules
var moduleVar = 'not global';
console.log(window.moduleVar);  // undefined in modules`}</code></pre>
    </article>
  );
} 