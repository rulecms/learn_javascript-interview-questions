export default function ArrayMethodsPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Essential Array Methods</h1>
      
      <p>
        JavaScript provides powerful array methods for data transformation and manipulation. Understanding these methods is crucial for clean and efficient code.
      </p>

      <h2>Transformation Methods</h2>
      <pre><code className="language-javascript">{`// map - transform each element
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// filter - create new array with elements that pass test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce - accumulate values
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// flatMap - map and flatten result
const pairs = numbers.flatMap(num => [num, num * 2]);
console.log(pairs); // [1, 2, 2, 4, 3, 6, 4, 8]`}</code></pre>

      <h2>Search Methods</h2>
      <pre><code className="language-javascript">{`const items = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' }
];

// find - returns first matching element
const john = items.find(item => item.name === 'John');
console.log(john); // { id: 1, name: 'John' }

// findIndex - returns index of first match
const janeIndex = items.findIndex(item => item.name === 'Jane');
console.log(janeIndex); // 1

// includes - checks if element exists
const hasJohn = items.some(item => item.name === 'John');
console.log(hasJohn); // true

// indexOf - find index of exact match
const numbers = [1, 2, 3, 2];
console.log(numbers.indexOf(2)); // 1
console.log(numbers.lastIndexOf(2)); // 3`}</code></pre>

      <h2>Mutation Methods</h2>
      <pre><code className="language-javascript">{`const arr = [1, 2, 3];

// push and pop
arr.push(4);    // [1, 2, 3, 4]
arr.pop();      // [1, 2, 3]

// unshift and shift
arr.unshift(0); // [0, 1, 2, 3]
arr.shift();    // [1, 2, 3]

// splice - remove/replace elements
arr.splice(1, 1);    // [1, 3]
arr.splice(1, 0, 2); // [1, 2, 3]

// sort and reverse
arr.sort((a, b) => b - a); // [3, 2, 1]
arr.reverse();             // [1, 2, 3]`}</code></pre>

      <h2>Common Patterns</h2>
      <pre><code className="language-javascript">{`// Chaining methods
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, curr) => acc + curr, 0);

// Creating new array
const copy = [...numbers];
const combined = [...arr1, ...arr2];

// Removing duplicates
const unique = [...new Set(numbers)];

// Conditional filtering
const filtered = items.filter(item => {
  if (condition1) return true;
  if (condition2) return false;
  return item.value > 10;
});`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What's the difference between map and forEach?</li>
        <li>How does sort() work internally?</li>
        <li>When would you use reduce over a loop?</li>
        <li>How do you handle array-like objects?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use map/filter/reduce instead of loops when possible</li>
        <li>Chain methods responsibly</li>
        <li>Consider performance with large arrays</li>
        <li>Use immutable patterns when appropriate</li>
        <li>Understand which methods mutate the original array</li>
      </ul>
    </article>
  );
} 