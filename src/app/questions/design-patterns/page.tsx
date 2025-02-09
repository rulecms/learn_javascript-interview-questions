export default function DesignPatternsPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Common JavaScript Design Patterns</h1>
      
      <p>
        Design patterns are reusable solutions to common programming problems. Understanding these patterns helps write more maintainable and scalable JavaScript applications.
      </p>

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
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();

// ES6 Singleton
class Settings {
  static instance;
  constructor() {
    if (Settings.instance) return Settings.instance;
    Settings.instance = this;
  }
}`}</code></pre>

      <h2>Observer Pattern</h2>
      <pre><code className="language-javascript">{`class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}

// Usage
const emitter = new EventEmitter();
emitter.on('userUpdated', user => console.log(user));
emitter.emit('userUpdated', { name: 'John' });`}</code></pre>

      <h2>Factory Pattern</h2>
      <pre><code className="language-javascript">{`// Simple Factory
class UserFactory {
  createUser(type) {
    switch(type) {
      case 'admin':
        return new AdminUser();
      case 'regular':
        return new RegularUser();
      default:
        throw new Error('Invalid user type');
    }
  }
}

// Abstract Factory
class UIFactory {
  createButton() { /* ... */ }
  createInput() { /* ... */ }
}

class DarkThemeFactory extends UIFactory {
  createButton() { return new DarkButton(); }
  createInput() { return new DarkInput(); }
}`}</code></pre>

      <h2>Decorator Pattern</h2>
      <pre><code className="language-javascript">{`// Class Decorator
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Example {
  @readonly
  pi() { return 3.14; }
}

// Function Decorators
function log(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args) {
    console.log(\`Calling \${name} with \`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

class Math {
  @log
  add(a, b) { return a + b; }
}`}</code></pre>

      <h2>Module Pattern</h2>
      <pre><code className="language-javascript">{`// Revealing Module Pattern
const ShoppingCart = (function() {
  // Private variables
  let items = [];
  
  // Private methods
  function calculateTotal() {
    return items.reduce((total, item) => total + item.price, 0);
  }
  
  // Public API
  return {
    addItem(item) {
      items.push(item);
    },
    getTotal() {
      return calculateTotal();
    }
  };
})();`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>When would you use a Singleton vs Module pattern?</li>
        <li>How do you implement the Observer pattern in React?</li>
        <li>What are the trade-offs of using the Factory pattern?</li>
        <li>How do decorators improve code reusability?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Choose patterns based on specific needs</li>
        <li>Don't over-engineer solutions</li>
        <li>Consider maintainability and testability</li>
        <li>Document pattern usage in your codebase</li>
        <li>Be consistent with pattern implementation</li>
      </ul>
    </article>
  );
} 