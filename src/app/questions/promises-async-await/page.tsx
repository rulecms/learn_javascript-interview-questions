export default function PromisesAsyncAwaitPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Promises and Async/Await</h1>
      
      <p>
        Promises and async/await are fundamental features for handling asynchronous operations in JavaScript. They provide a cleaner alternative to callback-based approaches.
      </p>

      <h2>Promises</h2>
      <pre><code className="language-javascript">{`// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
  // Simulating API call
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ data: 'Success!' });
    } else {
      reject(new Error('Failed to fetch'));
    }
  }, 1000);
});

// Using Promises
fetchData
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));`}</code></pre>

      <h2>Async/Await</h2>
      <pre><code className="language-javascript">{`// Using async/await
async function getData() {
  try {
    const result = await fetchData;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Done');
  }
}

// Promise methods
const promises = [fetch(url1), fetch(url2), fetch(url3)];

// Parallel execution
const results = await Promise.all(promises);

// Race condition
const firstResult = await Promise.race(promises);

// Handle all settled promises
const settled = await Promise.allSettled(promises);`}</code></pre>

      <h2>Key Concepts</h2>
      <ul>
        <li>Promises have three states: pending, fulfilled, rejected</li>
        <li>async/await is syntactic sugar over Promises</li>
        <li>Error handling using try/catch with async/await</li>
        <li>Promise chaining vs async/await sequential execution</li>
      </ul>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What's the difference between .then() chains and async/await?</li>
        <li>How do you handle multiple async operations in parallel?</li>
        <li>What are the benefits of using Promise.allSettled()?</li>
        <li>How do you handle errors in Promise chains vs async/await?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Always handle Promise rejections</li>
        <li>Use try/catch blocks with async/await</li>
        <li>Consider Promise.all() for parallel operations</li>
        <li>Avoid mixing Promise chains with async/await</li>
        <li>Remember that async functions always return Promises</li>
      </ul>
    </article>
  );
} 