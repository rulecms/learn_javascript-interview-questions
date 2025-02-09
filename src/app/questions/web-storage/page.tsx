export default function WebStoragePage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Web Storage APIs</h1>
      
      <p>
        Web Storage APIs provide mechanisms for storing data in the browser. Understanding these APIs is essential for managing client-side state and improving user experience.
      </p>

      <h2>localStorage and sessionStorage</h2>
      <pre><code className="language-javascript">{`// localStorage - persists across sessions
localStorage.setItem('user', JSON.stringify({ id: 1, name: 'John' }));
const user = JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');
localStorage.clear(); // Remove all items

// sessionStorage - cleared when session ends
sessionStorage.setItem('token', 'abc123');
const token = sessionStorage.getItem('token');
sessionStorage.removeItem('token');
sessionStorage.clear();

// Storage event
window.addEventListener('storage', event => {
  console.log('Key changed:', event.key);
  console.log('Old value:', event.oldValue);
  console.log('New value:', event.newValue);
});`}</code></pre>

      <h2>Cookies</h2>
      <pre><code className="language-javascript">{`// Setting cookies
document.cookie = 'username=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';
document.cookie = 'theme=dark; max-age=3600; secure; samesite=strict';

// Reading cookies
function getCookie(name) {
  const value = \`; \${document.cookie}\`;
  const parts = value.split(\`; \${name}=\`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Deleting cookies
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';`}</code></pre>

      <h2>IndexedDB</h2>
      <pre><code className="language-javascript">{`// Opening database
const request = indexedDB.open('MyDatabase', 1);

request.onerror = event => {
  console.error('Database error:', event.target.error);
};

request.onupgradeneeded = event => {
  const db = event.target.result;
  const store = db.createObjectStore('users', { keyPath: 'id' });
  store.createIndex('name', 'name', { unique: false });
};

// Adding data
function addUser(db, user) {
  const transaction = db.transaction(['users'], 'readwrite');
  const store = transaction.objectStore('users');
  store.add(user);
}

// Querying data
function getUser(db, id) {
  const transaction = db.transaction(['users']);
  const store = transaction.objectStore('users');
  return store.get(id);
}`}</code></pre>

      <h2>Cache API</h2>
      <pre><code className="language-javascript">{`// Opening cache
caches.open('v1').then(cache => {
  return cache.addAll([
    '/styles/main.css',
    '/scripts/app.js',
    '/images/logo.png'
  ]);
});

// Fetching from cache
caches.match('/styles/main.css')
  .then(response => {
    if (!response) {
      throw new Error('No data');
    }
    return response;
  })
  .catch(() => fetch('/styles/main.css'));`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What's the difference between localStorage and sessionStorage?</li>
        <li>How do you handle storage limits?</li>
        <li>When would you use IndexedDB over Web Storage?</li>
        <li>How do you handle security concerns with client-side storage?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use appropriate storage mechanism for your needs</li>
        <li>Implement error handling for storage operations</li>
        <li>Consider storage limits and cleanup strategies</li>
        <li>Don't store sensitive information client-side</li>
        <li>Implement proper data serialization/deserialization</li>
      </ul>
    </article>
  );
} 