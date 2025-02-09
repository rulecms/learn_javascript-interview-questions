export default function ModulesImportsPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Modules and Import/Export</h1>
      
      <p>
        JavaScript modules help organize code into reusable, maintainable pieces. Understanding module syntax and patterns is essential for modern JavaScript development.
      </p>

      <h2>ES6 Modules</h2>
      <pre><code className="language-javascript">{`// Named exports
export const PI = 3.14159;
export function square(x) {
  return x * x;
}

// Default export
export default class Calculator {
  add(a, b) { return a + b; }
}

// Named imports
import { PI, square } from './math.js';
import { PI as π } from './math.js';

// Default import
import Calculator from './calculator.js';

// Import all as namespace
import * as mathUtils from './math.js';

// Combined imports
import Calculator, { PI, square } from './math.js';`}</code></pre>

      <h2>Module Patterns</h2>
      <pre><code className="language-javascript">{`// Re-exporting
export { default as Calculator } from './calculator.js';
export { PI, square } from './math.js';

// Dynamic imports
async function loadModule() {
  const module = await import('./large-module.js');
  module.doSomething();
}

// Module with side effects
import './styles.css';
import 'bootstrap';

// Barrel exports (index.js)
export * from './math.js';
export * from './calculator.js';
export * from './utils.js';`}</code></pre>

      <h2>CommonJS vs ES Modules</h2>
      <pre><code className="language-javascript">{`// CommonJS (Node.js)
const path = require('path');
module.exports = {
  process() { /* ... */ }
};
exports.helper = function() { /* ... */ };

// ES Modules
import path from 'path';
export function process() { /* ... */ }
export const helper = function() { /* ... */ };

// Converting between formats
// CommonJS
const module = require('./module');
// ES Module equivalent
import module from './module.js';`}</code></pre>

      <h2>Advanced Patterns</h2>
      <pre><code className="language-javascript">{`// Async module pattern
export async function initialize() {
  const config = await loadConfig();
  return {
    start() { /* ... */ },
    stop() { /* ... */ }
  };
}

// Conditional exports
export default process.env.NODE_ENV === 'production'
  ? ProductionAPI
  : DevelopmentAPI;

// Module augmentation
import { original } from './original.js';
export const enhanced = {
  ...original,
  newFeature() { /* ... */ }
};`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What's the difference between CommonJS and ES modules?</li>
        <li>How do circular dependencies work in modules?</li>
        <li>When should you use dynamic imports?</li>
        <li>How do you handle module loading in different environments?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use named exports for multiple exports</li>
        <li>Use default exports sparingly</li>
        <li>Keep modules focused and single-purpose</li>
        <li>Consider tree-shaking when structuring exports</li>
        <li>Use barrel files to simplify imports</li>
      </ul>
    </article>
  );
} 