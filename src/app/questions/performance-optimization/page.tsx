export default function PerformanceOptimizationPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Performance Optimization Techniques</h1>
      
      <p>
        Performance optimization is crucial for providing a good user experience. Understanding various optimization techniques helps build faster and more efficient applications.
      </p>

      <h2>Code Optimization</h2>
      <pre><code className="language-javascript">{`// Memoization
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// Debouncing
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Throttling
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}`}</code></pre>

      <h2>Loading Optimization</h2>
      <pre><code className="language-javascript">{`// Lazy loading components
const LazyComponent = React.lazy(() => 
  import('./HeavyComponent')
);

// Dynamic imports
async function loadModule() {
  const module = await import('./large-module.js');
  module.doSomething();
}

// Image loading
<img 
  loading="lazy"
  srcset="small.jpg 300w, medium.jpg 600w"
  sizes="(max-width: 600px) 300px, 600px"
  src="fallback.jpg"
  alt="Optimized image"
/>`}</code></pre>

      <h2>React Performance</h2>
      <pre><code className="language-javascript">{`// Using memo
const MemoizedComponent = React.memo(function MyComponent(props) {
  return <div>{props.data}</div>;
});

// useMemo for expensive calculations
const memoizedValue = useMemo(() => 
  computeExpensiveValue(a, b), 
  [a, b]
);

// useCallback for callbacks
const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b]
);

// Virtual list for large datasets
function VirtualList({ items }) {
  return (
    <VirtualScroll
      itemCount={items.length}
      itemSize={50}
      renderItem={({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    />
  );
}`}</code></pre>

      <h2>Network Optimization</h2>
      <pre><code className="language-javascript">{`// Caching responses
const cache = new Cache();

async function fetchWithCache(url) {
  const cached = await cache.match(url);
  if (cached) return cached;
  
  const response = await fetch(url);
  cache.put(url, response.clone());
  return response;
}

// Request batching
class RequestBatcher {
  queue = [];
  timeout = null;
  
  add(request) {
    this.queue.push(request);
    if (!this.timeout) {
      this.timeout = setTimeout(() => this.flush(), 100);
    }
  }
  
  async flush() {
    const requests = this.queue;
    this.queue = [];
    this.timeout = null;
    return batchRequest(requests);
  }
}`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How do you identify performance bottlenecks?</li>
        <li>What tools do you use for performance monitoring?</li>
        <li>How do you optimize React component rendering?</li>
        <li>What are the best practices for code splitting?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Measure before optimizing</li>
        <li>Use appropriate caching strategies</li>
        <li>Implement code splitting</li>
        <li>Optimize images and assets</li>
        <li>Minimize network requests</li>
        <li>Use performance monitoring tools</li>
      </ul>
    </article>
  );
} 