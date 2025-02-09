export default function SecurityBestPracticesPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Security Best Practices</h1>
      
      <p>
        Security is crucial in modern web applications. Understanding common vulnerabilities and their prevention helps build safer applications.
      </p>

      <h2>Cross-Site Scripting (XSS)</h2>
      <pre><code className="language-javascript">{`// Bad - vulnerable to XSS
element.innerHTML = userInput;

// Good - escape HTML
element.textContent = userInput;

// Using DOMPurify for HTML content
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);

// React's automatic escaping
function Component({ userInput }) {
  return <div>{userInput}</div>; // Automatically escaped
}`}</code></pre>

      <h2>Cross-Site Request Forgery (CSRF)</h2>
      <pre><code className="language-javascript">{`// Include CSRF token in requests
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

fetch('/api/data', {
  method: 'POST',
  headers: {
    'CSRF-Token': csrfToken
  },
  credentials: 'include'
});

// Using Axios with CSRF protection
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
axios.defaults.withCredentials = true;`}</code></pre>

      <h2>Content Security Policy (CSP)</h2>
      <pre><code className="language-javascript">{`// CSP Header
Content-Security-Policy: default-src 'self';
  script-src 'self' 'nonce-random123';
  style-src 'self' 'unsafe-inline';
  img-src 'self' https:;

// Nonce-based script loading
<script nonce="random123">
  // Trusted script
</script>

// Report-only mode
Content-Security-Policy-Report-Only: 
  default-src 'self';
  report-uri /csp-violations`}</code></pre>

      <h2>Secure Authentication</h2>
      <pre><code className="language-javascript">{`// Password hashing
import bcrypt from 'bcrypt';

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// JWT handling
import jwt from 'jsonwebtoken';

function createToken(user) {
  return jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

// HTTP-only cookies
res.cookie('token', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict'
});`}</code></pre>

      <h2>Input Validation</h2>
      <pre><code className="language-javascript">{`// Server-side validation
function validateUser(data) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30),
    email: Joi.string().email(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/)
  });
  
  return schema.validate(data);
}

// Sanitize SQL queries
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]); // Use parameterized queries

// Validate file uploads
function validateFile(file) {
  const allowedTypes = ['image/jpeg', 'image/png'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  return (
    allowedTypes.includes(file.mimetype) &&
    file.size <= maxSize
  );
}`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>How do you prevent XSS attacks?</li>
        <li>What's the difference between authentication and authorization?</li>
        <li>How do you securely store sensitive data?</li>
        <li>What are the best practices for handling user sessions?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Always validate input on both client and server</li>
        <li>Use HTTPS everywhere</li>
        <li>Implement proper authentication and authorization</li>
        <li>Keep dependencies updated</li>
        <li>Follow the principle of least privilege</li>
        <li>Implement proper error handling</li>
      </ul>
    </article>
  );
} 