export default function ClosurePage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>What is a Closure?</h1>
      
      <p>
        A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
      </p>

      <h2>Example</h2>
      <pre><code className="language-javascript">{`function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
counter.increment(); // 1
console.log(counter.getCount()); // 1`}</code></pre>

      <h2>Key Points</h2>
      <ul>
        <li>Closures are created every time a function is created, at function creation time.</li>
        <li>A closure allows an inner function to access variables from its outer scope even after the outer function has returned.</li>
        <li>Closures are commonly used to create private variables and methods.</li>
      </ul>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How would you use closures to create private variables?</li>
        <li>What are the potential memory implications of closures?</li>
        <li>Can you explain how closures work in loops?</li>
      </ol>

      <h2>Real-world Applications</h2>
      <ul>
        <li>Module Pattern</li>
        <li>Currying</li>
        <li>Memoization</li>
        <li>Maintaining state in async operations</li>
      </ul>
    </article>
  );
} 