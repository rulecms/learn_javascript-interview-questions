export default function DOMManipulationPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>DOM Manipulation and Performance</h1>
      
      <p>
        Efficient DOM manipulation is crucial for web application performance. Understanding the best practices and common pitfalls can significantly improve user experience.
      </p>

      <h2>Basic DOM Operations</h2>
      <pre><code className="language-javascript">{`// Selecting elements
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');
const parent = element.parentNode;
const children = element.children;

// Creating and adding elements
const div = document.createElement('div');
div.textContent = 'New Element';
parent.appendChild(div);

// Removing elements
element.remove();
parent.removeChild(element);

// Modifying elements
element.textContent = 'New text';
element.innerHTML = '<span>HTML content</span>';
element.setAttribute('class', 'newClass');
element.classList.add('active');`}</code></pre>

      <h2>Performance Optimization</h2>
      <pre><code className="language-javascript">{`// Bad: Multiple DOM updates
for (let i = 0; i < 1000; i++) {
  container.innerHTML += '<div>' + i + '</div>';
}

// Good: Document Fragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  fragment.appendChild(div);
}
container.appendChild(fragment);

// Better: Build HTML string
const html = Array.from({ length: 1000 }, 
  (_, i) => '<div>' + i + '</div>'
).join('');
container.innerHTML = html;`}</code></pre>

      <h2>Event Handling</h2>
      <pre><code className="language-javascript">{`// Event delegation
document.getElementById('list').addEventListener('click', e => {
  if (e.target.matches('li')) {
    handleClick(e.target);
  }
});

// Debouncing events
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage
const handleScroll = debounce(() => {
  // Handle scroll event
}, 100);

window.addEventListener('scroll', handleScroll);`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What is reflow and repaint?</li>
        <li>How do you optimize DOM updates?</li>
        <li>What's the difference between textContent and innerHTML?</li>
        <li>How does event bubbling affect performance?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Minimize DOM updates</li>
        <li>Use document fragments for batch updates</li>
        <li>Implement event delegation</li>
        <li>Cache DOM queries</li>
        <li>Be careful with innerHTML for security</li>
        <li>Use modern APIs like IntersectionObserver</li>
      </ul>
    </article>
  );
} 