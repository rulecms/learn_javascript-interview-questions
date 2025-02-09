export default function ErrorHandlingPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Error Handling Patterns</h1>
      
      <p>
        Proper error handling is crucial for building robust JavaScript applications. Understanding different error handling patterns helps create more reliable and maintainable code.
      </p>

      <h2>Try-Catch Basics</h2>
      <pre><code className="language-javascript">{`// Basic try-catch
try {
  // Code that might throw an error
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error.message);
} finally {
  // Always executes
  cleanup();
}

// Async try-catch
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      // Handle network errors
    }
    throw error; // Re-throw if can't handle
  }
}`}</code></pre>

      <h2>Custom Error Types</h2>
      <pre><code className="language-javascript">{`// Custom Error classes
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = 'DatabaseError';
    this.query = query;
  }
}

// Usage
try {
  if (!isValid(data)) {
    throw new ValidationError('Invalid data');
  }
} catch (error) {
  if (error instanceof ValidationError) {
    // Handle validation errors
  } else {
    // Handle other errors
  }
}`}</code></pre>

      <h2>Error Handling Patterns</h2>
      <pre><code className="language-javascript">{`// Error boundary pattern
class ErrorBoundary {
  constructor(errorHandler) {
    this.errorHandler = errorHandler;
  }

  execute(fn) {
    try {
      return fn();
    } catch (error) {
      return this.errorHandler(error);
    }
  }
}

// Result type pattern
class Result {
  constructor(value, error) {
    this.value = value;
    this.error = error;
  }

  static success(value) {
    return new Result(value, null);
  }

  static failure(error) {
    return new Result(null, error);
  }
}

// Usage
function divide(a, b) {
  if (b === 0) {
    return Result.failure(new Error('Division by zero'));
  }
  return Result.success(a / b);
}`}</code></pre>

      <h2>Async Error Handling</h2>
      <pre><code className="language-javascript">{`// Promise error handling
fetchData()
  .then(handleSuccess)
  .catch(handleError)
  .finally(cleanup);

// Global error handling
window.onerror = function(msg, url, line, col, error) {
  // Log to monitoring service
  logError({ msg, url, line, col, error });
  return false;
};

// Unhandled promise rejections
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
});`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How do you handle errors in async/await code?</li>
        <li>What's the difference between throw and reject?</li>
        <li>How do you implement error boundaries in React?</li>
        <li>When should you create custom error types?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Always catch specific errors first</li>
        <li>Use custom error types for better error handling</li>
        <li>Implement proper error logging</li>
        <li>Don't swallow errors silently</li>
        <li>Consider using error boundaries</li>
        <li>Handle both sync and async errors</li>
      </ul>
    </article>
  );
} 