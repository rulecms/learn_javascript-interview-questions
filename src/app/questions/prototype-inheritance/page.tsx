export default function PrototypeInheritancePage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Prototype Inheritance vs Classical Inheritance</h1>
      
      <p>
        JavaScript uses prototypal inheritance, which is fundamentally different from classical inheritance found in languages like Java or C++. Understanding this difference is crucial for JavaScript developers.
      </p>

      <h2>Prototypal Inheritance</h2>
      <pre><code className="language-javascript">{`// Prototypal Inheritance Example
const animal = {
  makeSound() {
    console.log(this.sound);
  }
};

const dog = Object.create(animal);
dog.sound = "Woof!";

dog.makeSound(); // Outputs: Woof!`}</code></pre>

      <h2>Constructor Functions</h2>
      <pre><code className="language-javascript">{`// Constructor Function Pattern
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  console.log(this.sound);
};

function Dog(name) {
  Animal.call(this, name);
  this.sound = "Woof!";
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const rex = new Dog("Rex");
rex.makeSound(); // Outputs: Woof!`}</code></pre>

      <h2>Key Differences from Classical Inheritance</h2>
      <ul>
        <li>JavaScript uses prototype chain instead of class inheritance</li>
        <li>Objects inherit directly from other objects</li>
        <li>More flexible than classical inheritance</li>
        <li>Can change behavior at runtime</li>
      </ul>

      <h2>ES6 Class Syntax</h2>
      <pre><code className="language-javascript">{`// Modern Class Syntax (Still uses prototypes under the hood)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  makeSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.sound = "Woof!";
  }
}

const rex = new Dog("Rex");
rex.makeSound(); // Outputs: Woof!`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How does the prototype chain work in JavaScript?</li>
        <li>What are the advantages of prototypal inheritance over classical inheritance?</li>
        <li>How does the 'new' keyword work internally?</li>
        <li>What is the difference between Object.create() and the constructor pattern?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Prefer composition over inheritance</li>
        <li>Use ES6 class syntax for clearer code structure</li>
        <li>Be careful with prototype manipulation in production code</li>
        <li>Understand that classes are just syntax sugar over prototypes</li>
      </ul>
    </article>
  );
} 