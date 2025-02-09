export default function ObjectCreationPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Object Creation Patterns</h1>
      
      <p>
        JavaScript offers several patterns for creating and organizing objects. Each pattern has its own use cases and trade-offs.
      </p>

      <h2>Factory Pattern</h2>
      <pre><code className="language-javascript">{`// Simple factory function
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      return \`Hello, I'm \${this.name}\`;
    }
  };
}

const user1 = createUser('John', 30);
const user2 = createUser('Jane', 25);

// Factory with private variables
function createCounter() {
  let count = 0;  // Private variable
  
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount() { return count; }
  };
}`}</code></pre>

      <h2>Constructor Pattern</h2>
      <pre><code className="language-javascript">{`// Constructor function
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const user = new User('John', 30);

// Adding methods after creation
User.prototype.birthday = function() {
  this.age++;
};

// ES6 Class syntax (same under the hood)
class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}`}</code></pre>

      <h2>Singleton Pattern</h2>
      <pre><code className="language-javascript">{`// Classic Singleton
const Database = (function() {
  let instance;
  
  function createInstance() {
    return {
      data: [],
      add(item) { this.data.push(item); },
      remove(item) { /* ... */ }
    };
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true`}</code></pre>

      <h2>Module Pattern</h2>
      <pre><code className="language-javascript">{`// IIFE Module
const Calculator = (function() {
  // Private variables
  let result = 0;
  
  // Private function
  function validate(num) {
    return typeof num === 'number';
  }
  
  // Public API
  return {
    add(num) {
      if (validate(num)) result += num;
      return result;
    },
    subtract(num) {
      if (validate(num)) result -= num;
      return result;
    },
    getResult() {
      return result;
    }
  };
})();`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What are the advantages of factory vs constructor pattern?</li>
        <li>How does prototypal inheritance work with these patterns?</li>
        <li>When would you use the Singleton pattern?</li>
        <li>How do you implement private properties in classes?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Choose patterns based on specific needs</li>
        <li>Consider memory usage with prototypes</li>
        <li>Use modern class syntax when appropriate</li>
        <li>Implement proper encapsulation</li>
        <li>Keep objects focused and single-purpose</li>
      </ul>
    </article>
  );
} 