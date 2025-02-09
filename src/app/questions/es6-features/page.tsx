export default function ES6FeaturesPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>ES6+ (Modern JavaScript) Features</h1>
      
      <p>
        ES6 (ECMAScript 2015) and later versions introduced many powerful features that modernized JavaScript. Understanding these features is essential for writing clean, modern JavaScript code.
      </p>

      <h2>Arrow Functions</h2>
      <pre><code className="language-javascript">{`// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function with block
const calculate = (a, b) => {
  const result = a * b;
  return result;
};

// 'this' binding
class Timer {
  constructor() {
    this.seconds = 0;
    setInterval(() => this.tick(), 1000);
  }
  
  tick() {
    this.seconds++;
  }
}`}</code></pre>

      <h2>Destructuring</h2>
      <pre><code className="language-javascript">{`// Object destructuring
const user = { name: 'John', age: 30 };
const { name, age } = user;

// With default values
const { country = 'Unknown' } = user;

// Array destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;

// Rest pattern
const [head, ...tail] = numbers;

// Parameter destructuring
function printUser({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}`}</code></pre>

      <h2>Template Literals</h2>
      <pre><code className="language-javascript">{`// Basic usage
const name = 'John';
const greeting = \`Hello, \${name}!\`;

// Multiline strings
const html = \`
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    \`\${result}\${str}\${values[i] ? \`<em>\${values[i]}</em>\` : ''}\`, 
  '');
}

const highlighted = highlight\`Hello \${name}!\`;`}</code></pre>

      <h2>Classes and Modules</h2>
      <pre><code className="language-javascript">{`// Class definition
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

// Class inheritance
class Dog extends Animal {
  speak() {
    return \`\${this.name} barks\`;
  }
}

// Modules
export const helper = {
  format(text) {
    return text.trim();
  }
};

import { helper } from './helpers.js';`}</code></pre>

      <h2>New Data Structures</h2>
      <pre><code className="language-javascript">{`// Set
const uniqueNumbers = new Set([1, 1, 2, 3, 3]);
uniqueNumbers.add(4);
console.log([...uniqueNumbers]); // [1, 2, 3, 4]

// Map
const userMap = new Map();
userMap.set('john', { age: 30 });
console.log(userMap.get('john'));

// WeakMap and WeakSet
const weakMap = new WeakMap();
let obj = { data: 'value' };
weakMap.set(obj, 'metadata');
obj = null; // object can be garbage collected`}</code></pre>

      <h2>Promises and Async</h2>
      <pre><code className="language-javascript">{`// Promise creation
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done'), 1000);
});

// Async/await
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How do arrow functions differ from regular functions?</li>
        <li>What are the benefits of using let and const over var?</li>
        <li>How do ES6 modules improve code organization?</li>
        <li>When would you use WeakMap over regular Map?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use const by default, let when needed</li>
        <li>Prefer arrow functions for callbacks</li>
        <li>Use template literals for string interpolation</li>
        <li>Leverage destructuring for cleaner code</li>
        <li>Use modules for better code organization</li>
        <li>Understand the nuances of new features</li>
      </ul>
    </article>
  );
} 