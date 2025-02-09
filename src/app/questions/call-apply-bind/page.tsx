export default function CallApplyBindPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Call, Apply, and Bind Methods</h1>
      
      <p>
        Call, Apply, and Bind are methods available on function objects in JavaScript that allow you to control the value of 'this' and how arguments are passed to functions.
      </p>

      <h2>The Call Method</h2>
      <pre><code className="language-javascript">{`// Basic call() usage
function greet() {
  return \`Hello, I'm \${this.name}\`;
}

const user = { name: 'John' };
console.log(greet.call(user)); // "Hello, I'm John"

// call() with arguments
function introduce(greeting, punctuation) {
  return \`\${greeting}, I'm \${this.name}\${punctuation}\`;
}

console.log(introduce.call(user, 'Hi', '!')); // "Hi, I'm John!"

// Borrowing methods
const numbers = [1, 2, 3];
const args = [0, 1, 2];
const push = Array.prototype.push.call(numbers, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]`}</code></pre>

      <h2>The Apply Method</h2>
      <pre><code className="language-javascript">{`// apply() with array of arguments
function introduce(greeting, punctuation) {
  return \`\${greeting}, I'm \${this.name}\${punctuation}\`;
}

const user = { name: 'John' };
console.log(introduce.apply(user, ['Hello', '!'])); // "Hello, I'm John!"

// Useful apply() examples
const numbers = [5, 6, 2, 3, 7];

// Using apply to pass array elements as arguments
const max = Math.max.apply(null, numbers);
console.log(max); // 7

// Merging arrays
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array); // ['a', 'b', 0, 1, 2]`}</code></pre>

      <h2>The Bind Method</h2>
      <pre><code className="language-javascript">{`// Creating bound function
function greet() {
  return \`Hello, I'm \${this.name}\`;
}

const user = { name: 'John' };
const boundGreet = greet.bind(user);
console.log(boundGreet()); // "Hello, I'm John"

// Partial application
function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(4)); // 8

// In class methods
class Button {
  constructor(text) {
    this.text = text;
    this.click = this.click.bind(this);
  }

  click() {
    console.log(this.text);
  }
}`}</code></pre>

      <h2>Real-World Use Cases</h2>
      <pre><code className="language-javascript">{`// Event handlers
class TodoList {
  constructor() {
    this.todos = [];
    this.addTodo = this.addTodo.bind(this);
    document.querySelector('button')
      .addEventListener('click', this.addTodo);
  }

  addTodo() {
    this.todos.push('New Todo');
  }
}

// Function borrowing
const calculator = {
  numbers: [],
  sum() {
    return this.numbers.reduce((a, b) => a + b, 0);
  }
};

const numbersObj = { numbers: [1, 2, 3] };
console.log(calculator.sum.call(numbersObj)); // 6

// Partial application with bind
function request(type, url, data) {
  console.log(type, url, data);
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');

get('/api/users');
post('/api/users', { name: 'John' });`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What's the main difference between call() and apply()?</li>
        <li>Why would you use bind() instead of call() or apply()?</li>
        <li>How does bind() help with event handlers in React?</li>
        <li>What is partial application and how does bind() enable it?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use call() when you have a fixed number of arguments</li>
        <li>Use apply() when working with arrays of arguments</li>
        <li>Use bind() for creating reusable methods with fixed context</li>
        <li>Consider arrow functions as an alternative to binding</li>
        <li>Be careful with performance when using apply with large arrays</li>
      </ul>
    </article>
  );
} 