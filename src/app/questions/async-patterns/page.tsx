export default function AsyncPatternsPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Asynchronous Programming Patterns</h1>
      
      <p>
        JavaScript offers various patterns for handling asynchronous operations. Understanding these patterns is crucial for writing efficient and maintainable async code.
      </p>

      <h2>Callbacks</h2>
      <pre><code className="language-javascript">{`// Basic callback pattern
function fetchData(callback) {
  setTimeout(() => {
    callback(null, { data: 'Success' });
  }, 1000);
}

// Callback hell example
fetchUser(function(err, user) {
  if (err) handleError(err);
  fetchProfile(user.id, function(err, profile) {
    if (err) handleError(err);
    fetchPosts(profile.id, function(err, posts) {
      if (err) handleError(err);
      // Deep nesting continues...
    });
  });
});`}</code></pre>

      <h2>Promises</h2>
      <pre><code className="language-javascript">{`// Creating promises
const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve('Success!');
  } else {
    reject(new Error('Failed'));
  }
});

// Promise chaining
fetchUser(userId)
  .then(user => fetchProfile(user.id))
  .then(profile => fetchPosts(profile.id))
  .catch(error => handleError(error));

// Promise.all for parallel execution
Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
])
  .then(([users, posts, comments]) => {
    // Handle all responses
  });

// Promise.race for timeouts
Promise.race([
  fetch('/api/data'),
  new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), 5000)
  )
]);`}</code></pre>

      <h2>Async/Await</h2>
      <pre><code className="language-javascript">{`// Basic async/await
async function fetchUserData() {
  try {
    const user = await fetchUser(userId);
    const profile = await fetchProfile(user.id);
    const posts = await fetchPosts(profile.id);
    return { user, profile, posts };
  } catch (error) {
    handleError(error);
  }
}

// Parallel execution with async/await
async function fetchAllData() {
  const [users, posts, comments] = await Promise.all([
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/comments')
  ]);
  return { users, posts, comments };
}

// Error handling patterns
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)));
    }
  }
}`}</code></pre>

      <h2>Generators and Async Iterators</h2>
      <pre><code className="language-javascript">{`// Generator function
async function* createAsyncIterator() {
  for (let i = 0; i < 5; i++) {
    await new Promise(r => setTimeout(r, 1000));
    yield i;
  }
}

// Using async iterator
async function processItems() {
  for await (const item of createAsyncIterator()) {
    console.log(item);
  }
}

// Custom async iterator
const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield 'Hello';
    yield 'Async';
    yield 'World';
  }
};`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How do you handle errors in async/await vs promises?</li>
        <li>What are the benefits of using async/await over promises?</li>
        <li>How do you implement timeout for async operations?</li>
        <li>When would you use generators over regular async functions?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Always handle errors in async operations</li>
        <li>Use async/await for better readability</li>
        <li>Implement proper timeout mechanisms</li>
        <li>Consider parallel execution when possible</li>
        <li>Use appropriate error retry strategies</li>
      </ul>
    </article>
  );
} 