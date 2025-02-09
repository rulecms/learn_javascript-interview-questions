export default function EventLoopPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>How does the Event Loop work?</h1>
      
      <p>
        The Event Loop is a fundamental concept in JavaScript that handles asynchronous operations and callback execution. It's what allows JavaScript to be non-blocking despite being single-threaded.
      </p>

      <h2>Key Components</h2>
      <ul>
        <li>Call Stack - Executes synchronous code</li>
        <li>Web APIs - Handles async operations (setTimeout, fetch, etc.)</li>
        <li>Callback Queue - Stores callbacks ready for execution</li>
        <li>Microtask Queue - Higher priority queue for Promises</li>
        <li>Event Loop - Coordinates between these components</li>
      </ul>

      <h2>Example</h2>
      <pre><code className="language-javascript">{`console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve()
  .then(() => console.log('Promise 1'));

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('End');

// Output:
// Start
// End
// Promise 1
// Timeout 1
// Timeout 2`}</code></pre>

      <h2>How It Works</h2>
      <ol>
        <li>Synchronous code executes immediately on the call stack</li>
        <li>Async operations are delegated to Web APIs</li>
        <li>Completed async operations push callbacks to appropriate queues</li>
        <li>Event loop checks if call stack is empty</li>
        <li>If empty, processes microtasks first (Promises)</li>
        <li>Then processes macrotasks (setTimeout, setInterval)</li>
      </ol>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>Why do microtasks have priority over macrotasks?</li>
        <li>How does this affect performance in web applications?</li>
        <li>What's the difference between setTimeout(fn, 0) and setImmediate()?</li>
        <li>How does the event loop differ in Node.js vs browsers?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Avoid blocking the event loop with long-running tasks</li>
        <li>Use microtasks judiciously to prevent starving macrotasks</li>
        <li>Consider using Web Workers for CPU-intensive tasks</li>
        <li>Be aware of how different async operations are prioritized</li>
      </ul>
    </article>
  );
} 