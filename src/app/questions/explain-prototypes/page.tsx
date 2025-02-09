export default function ExplainPrototypesPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Prototypes in JavaScript</h1>
      
      <p>
        JavaScript uses a prototypal inheritance model where objects can inherit properties and methods from other objects. Understanding prototypes is crucial for object-oriented programming in JavaScript.
      </p>

      <h2>Prototype Chain</h2>
      <pre><code className="language-javascript">{`// Basic prototype chain
const animal = {
  eat: function() {
    console.log('eating...');
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log('woof!');
};

// dog can access both bark() and eat()
dog.bark(); // 'woof!'
dog.eat();  // 'eating...'`}</code></pre>

      <h2>Constructor Functions</h2>
      <pre><code className="language-javascript">{`// Constructor function
function Person(name) {
  this.name = name;
}

// Adding method to prototype
Person.prototype.sayHello = function() {
  return \`Hello, I'm \${this.name}\`;
};

const john = new Person('John');
console.log(john.sayHello()); // "Hello, I'm John"

// Checking prototypes
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true`}</code></pre>

      <h2>Class Syntax (ES6+)</h2>
      <pre><code className="language-javascript">{`// Modern class syntax (still uses prototypes under the hood)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(\`\${this.name} barks\`);
  }
}

const rex = new Dog('Rex');
rex.speak(); // "Rex barks"`}</code></pre>

      <h2>Prototype Methods</h2>
      <pre><code className="language-javascript">{`// Object.create()
const proto = {
  greet() {
    return 'Hello!';
  }
};

const obj = Object.create(proto);
console.log(obj.greet()); // 'Hello!'

// hasOwnProperty
console.log(obj.hasOwnProperty('greet')); // false
console.log(proto.hasOwnProperty('greet')); // true

// Object.getPrototypeOf()
console.log(Object.getPrototypeOf(obj) === proto); // true

// Setting prototype
const child = {};
Object.setPrototypeOf(child, proto);
console.log(child.greet()); // 'Hello!'`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What's the difference between __proto__ and prototype?</li>
        <li>How does prototypal inheritance differ from classical inheritance?</li>
        <li>Why use prototypes instead of regular object properties?</li>
        <li>What are the performance implications of the prototype chain?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Prefer class syntax for cleaner code</li>
        <li>Avoid modifying built-in prototypes</li>
        <li>Use Object.create() for explicit prototype chains</li>
        <li>Keep prototype chains short for better performance</li>
        <li>Use composition over inheritance when possible</li>
      </ul>
    </article>
  );
} 