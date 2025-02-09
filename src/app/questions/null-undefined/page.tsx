export default function NullUndefinedPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Null vs Undefined in JavaScript</h1>
      
      <p>
        JavaScript has two distinct values for representing "nothing": null and undefined. Understanding their differences and proper usage is crucial for writing robust JavaScript code.
      </p>

      <h2>Understanding Undefined</h2>
      <pre><code className="language-javascript">{`// Variables that haven't been assigned a value
let variable;
console.log(variable); // undefined

// Function parameters that aren't provided
function greet(name) {
  console.log(name); // undefined if no argument passed
}
greet();

// Object properties that don't exist
const obj = {};
console.log(obj.nonexistent); // undefined

// Function return value when nothing is explicitly returned
function noReturn() {
  // no return statement
}
console.log(noReturn()); // undefined`}</code></pre>

      <h2>Understanding Null</h2>
      <pre><code className="language-javascript">{`// Explicit absence of value
let user = null;
console.log(user); // null

// Common use in conditional checks
function getUser(id) {
  // User not found
  return null;
}

const user = getUser(1);
if (user === null) {
  console.log('User not found');
}

// Object with optional properties
const config = {
  debug: true,
  cache: null, // explicitly set to no caching
  timeout: 1000
};`}</code></pre>

      <h2>Type Comparisons</h2>
      <pre><code className="language-javascript">{`// Type of checks
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known JavaScript quirk)

// Equality comparisons
console.log(null == undefined); // true
console.log(null === undefined); // false

// Checking for either
function isEmpty(value) {
  return value == null; // checks for both null and undefined
}

// Nullish coalescing
const value = null ?? 'default';
console.log(value); // "default"

const value2 = undefined ?? 'default';
console.log(value2); // "default"`}</code></pre>

      <h2>Common Patterns</h2>
      <pre><code className="language-javascript">{`// Optional chaining with null/undefined
const user = null;
console.log(user?.name); // undefined

// Default parameters
function greet(name = 'Guest') {
  console.log(\`Hello, \${name}!\`);
}

greet(undefined); // "Hello, Guest!"
greet(null); // "Hello, null!"

// Destructuring with defaults
const { name = 'Unknown' } = {};
console.log(name); // "Unknown"

// Early returns
function processUser(user) {
  if (user == null) {
    return;
  }
  // Process user...
}`}</code></pre>

      <h2>Common Gotchas</h2>
      <pre><code className="language-javascript">{`// Arithmetic operations
console.log(undefined + 1); // NaN
console.log(null + 1); // 1 (null converts to 0)

// Object property access
const obj = null;
try {
  console.log(obj.property); // TypeError
} catch (e) {
  console.log('Error accessing property of null');
}

// Array methods
const arr = [null, undefined, 1, 2];
console.log(arr.filter(Boolean)); // [1, 2]
console.log(arr.map(x => x ?? 0)); // [0, 0, 1, 2]`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>When would you use null vs undefined?</li>
        <li>Why does typeof null return "object"?</li>
        <li>How do null and undefined behave differently in comparisons?</li>
        <li>What's the difference between ?? and ||?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use undefined for unintentional absence of value</li>
        <li>Use null for intentional absence of value</li>
        <li>Prefer ?? over || when dealing with null/undefined</li>
        <li>Use optional chaining (?.) for safe property access</li>
        <li>Be explicit about null checks in function parameters</li>
        <li>Consider TypeScript for better null/undefined handling</li>
      </ul>
    </article>
  );
} 