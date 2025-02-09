export default function EventDelegationPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Event Delegation and Bubbling</h1>
      
      <p>
        Event delegation is a technique where you attach a single event listener to a parent element to handle events on its children, leveraging event bubbling.
      </p>

      <h2>Event Bubbling</h2>
      <pre><code className="language-javascript">{`<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById('parent').addEventListener('click', e => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', e => {
  console.log('Child clicked');
  // e.stopPropagation(); // Stops bubbling
});

// Clicking button logs:
// "Child clicked"
// "Parent clicked"`}</code></pre>

      <h2>Event Delegation Example</h2>
      <pre><code className="language-javascript">{`<ul id="todo-list">
  <li>Task 1</li>
  <li>Task 2</li>
  <li>Task 3</li>
</ul>

// Instead of:
document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', handleClick);
});

// Use delegation:
document.getElementById('todo-list').addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    handleClick(e);
  }
});

// Works for dynamically added items too:
todoList.innerHTML += '<li>New Task</li>';`}</code></pre>

      <h2>Advanced Delegation</h2>
      <pre><code className="language-javascript">{`// Multiple actions using data attributes
<div id="actions">
  <button data-action="save">Save</button>
  <button data-action="delete">Delete</button>
  <button data-action="edit">Edit</button>
</div>

document.getElementById('actions').addEventListener('click', e => {
  const action = e.target.dataset.action;
  if (action) {
    handlers[action](e);
  }
});`}</code></pre>

      <h2>Key Concepts</h2>
      <ul>
        <li>Events bubble up through the DOM tree</li>
        <li>Delegation reduces memory usage</li>
        <li>Works with dynamic elements</li>
        <li>Improves performance with many elements</li>
      </ul>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What's the difference between bubbling and capturing?</li>
        <li>How do you stop event propagation?</li>
        <li>When should you not use event delegation?</li>
        <li>How does event delegation improve performance?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use delegation for lists and tables</li>
        <li>Check target elements carefully</li>
        <li>Consider using closest() for better matching</li>
        <li>Be aware of events that don't bubble</li>
        <li>Use data attributes for flexible handling</li>
      </ul>
    </article>
  );
} 