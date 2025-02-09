export default function ScopeChainPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Scope Chain in JavaScript</h1>
      
      <p>
        The scope chain is how JavaScript resolves variable names. It's the set of rules that determines how JavaScript looks up variables and where they can be accessed.
      </p>

      <h2>Lexical Scope</h2>
      <pre><code className="language-javascript">{`// Variables are accessible from inner functions
const globalVar = 'I am global';

function outerFunction() {
  const outerVar = 'I am from outer';
  
  function innerFunction() {
    const innerVar = 'I am from inner';
    console.log(innerVar);    // Accessible
    console.log(outerVar);    // Accessible
    console.log(globalVar);   // Accessible
  }
  
  innerFunction();
  console.log(innerVar);      // ReferenceError
}

outerFunction();
console.log(outerVar);        // ReferenceError`}</code></pre>

      <h2>Block Scope</h2>
      <pre><code className="language-javascript">{`// let and const create block scope
{
  let blockVar = 'block scoped';
  const constVar = 'also block scoped';
  var functionVar = 'function scoped';
}

console.log(functionVar);  // Accessible
console.log(blockVar);     // ReferenceError
console.log(constVar);     // ReferenceError

// Loop scope
for (let i = 0; i < 3; i++) {
  const square = i * i;
  console.log(square);
}
console.log(i);        // ReferenceError
console.log(square);   // ReferenceError`}</code></pre>

      <h2>Function Scope</h2>
      <pre><code className="language-javascript">{`// var creates function scope
function functionScope() {
  var functionVar = 'function scoped';
  let blockVar = 'block scoped';
  
  if (true) {
    var anotherFunctionVar = 'still function scoped';
    let anotherBlockVar = 'block scoped';
  }
  
  console.log(functionVar);         // Accessible
  console.log(anotherFunctionVar);  // Accessible
  console.log(anotherBlockVar);     // ReferenceError
}

// Hoisting with var
function hoistingExample() {
  console.log(hoistedVar);  // undefined
  var hoistedVar = 'hoisted';
}`}</code></pre>

      <h2>Closure and Scope</h2>
      <pre><code className="language-javascript">{`// Closures retain their scope chain
function createCounter() {
  let count = 0;  // Enclosed variable
  
  return {
    increment() {
      return ++count;  // Access to parent scope
    },
    decrement() {
      return --count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.count);        // undefined`}</code></pre>

      <h2>Module Scope</h2>
      <pre><code className="language-javascript">{`// Each module has its own scope
// moduleA.js
const privateVar = 'private';
export const publicVar = 'public';

// moduleB.js
import { publicVar } from './moduleA.js';
console.log(publicVar);    // Accessible
console.log(privateVar);   // ReferenceError

// Global scope pollution
window.globalVar = 'polluting global scope';
console.log(globalVar);    // Accessible everywhere`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How does the scope chain work with nested functions?</li>
        <li>What's the difference between lexical and dynamic scope?</li>
        <li>How does block scope differ from function scope?</li>
        <li>How do closures maintain their scope chain?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Prefer const and let over var</li>
        <li>Keep functions pure and avoid global scope</li>
        <li>Use modules to encapsulate code</li>
        <li>Be mindful of closure memory implications</li>
        <li>Understand hoisting behavior</li>
        <li>Use block scope for better variable isolation</li>
      </ul>
    </article>
  );
} 