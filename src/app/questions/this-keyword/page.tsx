export default function ThisKeywordPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>The 'this' Keyword in JavaScript</h1>
      
      <p>
        The 'this' keyword in JavaScript refers to the current execution context. Its value depends on how and where a function is called, not where it's defined.
      </p>

      <h2>Global Context</h2>
      <pre><code className="language-javascript">{`// In global scope
console.log(this === window); // true (in browser)

// In strict mode
'use strict';
console.log(this === undefined); // true

// In modules
console.log(this === undefined); // true (modules are strict by default)`}</code></pre>

      <h2>Object Methods</h2>
      <pre><code className="language-javascript">{`// Regular object method
const user = {
  name: 'John',
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

console.log(user.greet()); // "Hello, I'm John"

// Losing context
const greet = user.greet;
console.log(greet()); // "Hello, I'm undefined"

// Fixing with bind
const boundGreet = user.greet.bind(user);
console.log(boundGreet()); // "Hello, I'm John"`}</code></pre>

      <h2>Constructor Functions</h2>
      <pre><code className="language-javascript">{`// Constructor function
function User(name) {
  this.name = name;
  this.sayHi = function() {
    return \`Hi, \${this.name}\`;
  };
}

const user = new User('John');
console.log(user.sayHi()); // "Hi, John"

// Without new keyword
const user2 = User('John'); // this refers to window/global
console.log(user2); // undefined
console.log(window.name); // "John" (in non-strict mode)`}</code></pre>

      <h2>Arrow Functions</h2>
      <pre><code className="language-javascript">{`// Arrow functions inherit 'this'
const obj = {
  name: 'Object',
  regularMethod() {
    return () => {
      return this.name;
    };
  },
  arrowMethod: () => {
    return this.name;
  }
};

const method = obj.regularMethod();
console.log(method()); // "Object"

console.log(obj.arrowMethod()); // undefined (this refers to outer scope)`}</code></pre>

      <h2>Event Handlers</h2>
      <pre><code className="language-javascript">{`class Button {
  constructor(text) {
    this.text = text;
    this.element = document.createElement('button');
    
    // Wrong way - loses context
    this.element.addEventListener('click', function() {
      console.log(this.text); // undefined
    });
    
    // Correct ways
    this.element.addEventListener('click', (e) => {
      console.log(this.text); // works
    });
    
    this.element.addEventListener('click', this.handleClick.bind(this));
  }
  
  handleClick() {
    console.log(this.text);
  }
}`}</code></pre>

      <h2>Call, Apply, and Bind</h2>
      <pre><code className="language-javascript">{`function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}

const person = { name: 'John' };

// Using call
console.log(greet.call(person, 'Hello', '!')); // "Hello, John!"

// Using apply
console.log(greet.apply(person, ['Hi', '?'])); // "Hi, John?"

// Using bind
const boundGreet = greet.bind(person);
console.log(boundGreet('Hey', '.')); // "Hey, John."`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How does 'this' behave differently in arrow functions?</li>
        <li>What's the difference between call, apply, and bind?</li>
        <li>How does 'this' work in event handlers?</li>
        <li>What happens when you forget the 'new' keyword?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use arrow functions for callbacks to preserve 'this'</li>
        <li>Be careful with standalone function calls</li>
        <li>Always use 'new' with constructor functions</li>
        <li>Consider using class syntax for clearer 'this' binding</li>
        <li>Use bind/arrow functions for event handlers</li>
      </ul>
    </article>
  );
} 