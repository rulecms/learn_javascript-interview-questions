export default function MemoryManagementPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Memory Management in JavaScript</h1>
      
      <p>
        Understanding memory management and garbage collection in JavaScript is crucial for writing performant applications and avoiding memory leaks.
      </p>

      <h2>Memory Lifecycle</h2>
      <pre><code className="language-javascript">{`// 1. Memory Allocation
let number = 123; // allocates memory for a number
let string = "Hello"; // allocates memory for a string
let object = { a: 1 }; // allocates memory for an object
let array = [1, 2, 3]; // allocates memory for an array

// 2. Memory Usage
object.b = 2; // uses previously allocated memory
array.push(4); // might allocate new memory if needed

// 3. Memory Release
object = null; // marks memory available for garbage collection
array = null; // marks array memory for garbage collection`}</code></pre>

      <h2>Common Memory Leaks</h2>
      <pre><code className="language-javascript">{`// 1. Global Variables
function leak() {
  leakedVariable = "I'm leaked"; // accidentally global
}

// 2. Forgotten Timers
function startTimer() {
  const heavyObject = { data: new Array(1000000) };
  setInterval(() => {
    console.log(heavyObject); // heavyObject never garbage collected
  }, 1000);
}

// 3. Closures
function closure() {
  const heavyData = new Array(1000000);
  return function() {
    console.log(heavyData[0]); // heavyData is retained
  };
}

// 4. Event Listeners
function addHandler() {
  const element = document.getElementById('button');
  element.addEventListener('click', () => {
    // Handler retained even if element is removed
    heavyData.process();
  });
}`}</code></pre>

      <h2>Preventing Memory Leaks</h2>
      <pre><code className="language-javascript">{`// 1. Clearing Timers
let timer;
function startTimer() {
  const data = heavyComputation();
  timer = setInterval(() => {
    console.log(data);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

// 2. Removing Event Listeners
function setupHandler() {
  const handler = () => {
    // handle event
  };
  element.addEventListener('click', handler);
  
  return () => {
    element.removeEventListener('click', handler);
  };
}

// 3. WeakMap and WeakSet
const cache = new WeakMap();
let object = { data: 'valuable' };
cache.set(object, 'metadata');
object = null; // object and its metadata can be garbage collected

// 4. Proper Closure Management
function createCounter() {
  let count = 0;
  return () => ++count; // only retains what's needed
}`}</code></pre>

      <h2>Memory Analysis</h2>
      <pre><code className="language-javascript">{`// Using Chrome DevTools
// 1. Take heap snapshot
// Chrome DevTools -> Memory -> Take Snapshot

// 2. Record allocation timeline
// Chrome DevTools -> Memory -> Record Allocation Timeline

// 3. Check memory usage
console.log(process.memoryUsage());
/*
{
  heapUsed: 12345678,
  heapTotal: 23456789,
  external: 1234567,
  arrayBuffers: 123456
}
*/`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How does JavaScript's garbage collection work?</li>
        <li>What are the common causes of memory leaks?</li>
        <li>How do you identify memory leaks?</li>
        <li>What's the difference between WeakMap and Map?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Always clean up timers and event listeners</li>
        <li>Use WeakMap/WeakSet for caching object references</li>
        <li>Avoid accidental global variables</li>
        <li>Profile memory usage during development</li>
        <li>Be careful with closures retaining large objects</li>
        <li>Implement proper cleanup in SPA routes</li>
      </ul>
    </article>
  );
} 