export default function WebAPIsPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Modern Web APIs</h1>
      
      <p>
        Modern browsers provide powerful APIs for building rich web applications. Understanding these APIs is essential for creating interactive and performant web experiences.
      </p>

      <h2>Intersection Observer</h2>
      <pre><code className="language-javascript">{`// Creating an intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5,
  rootMargin: '0px'
});

// Observing elements
document.querySelectorAll('.lazy-load')
  .forEach(el => observer.observe(el));

// Cleanup
observer.disconnect();`}</code></pre>

      <h2>ResizeObserver</h2>
      <pre><code className="language-javascript">{`// Monitoring element size changes
const resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    const { width, height } = entry.contentRect;
    console.log('Element size:', width, height);
  }
});

resizeObserver.observe(element);`}</code></pre>

      <h2>Web Workers</h2>
      <pre><code className="language-javascript">{`// Main thread
const worker = new Worker('worker.js');

worker.postMessage({ data: complexData });

worker.onmessage = (event) => {
  console.log('Result:', event.data);
};

// worker.js
self.onmessage = (event) => {
  const result = heavyComputation(event.data);
  self.postMessage(result);
};`}</code></pre>

      <h2>Service Workers</h2>
      <pre><code className="language-javascript">{`// Registering a service worker
navigator.serviceWorker.register('/sw.js')
  .then(registration => {
    console.log('SW registered');
  });

// sw.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});`}</code></pre>

      <h2>Geolocation API</h2>
      <pre><code className="language-javascript">{`// Getting user location
navigator.geolocation.getCurrentPosition(
  position => {
    const { latitude, longitude } = position.coords;
    console.log(\`Location: \${latitude}, \${longitude}\`);
  },
  error => {
    console.error('Error:', error.message);
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
);`}</code></pre>

      <h2>Web Share API</h2>
      <pre><code className="language-javascript">{`// Sharing content
async function shareContent() {
  try {
    await navigator.share({
      title: 'Check this out',
      text: 'Interesting article',
      url: window.location.href
    });
    console.log('Shared successfully');
  } catch (err) {
    console.error('Error sharing:', err);
  }
}`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How do you handle browser compatibility for modern APIs?</li>
        <li>What are the security considerations for Web Workers?</li>
        <li>How do Service Workers enable offline functionality?</li>
        <li>When would you use IntersectionObserver vs scroll events?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Always check for API support before using</li>
        <li>Implement fallbacks for unsupported features</li>
        <li>Consider performance implications</li>
        <li>Handle errors and edge cases</li>
        <li>Use feature detection instead of browser detection</li>
        <li>Follow security best practices for workers</li>
      </ul>
    </article>
  );
} 