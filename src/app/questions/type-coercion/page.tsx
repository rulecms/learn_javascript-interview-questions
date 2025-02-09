export default function TypeCoercionPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Type Coercion in JavaScript</h1>
      
      <p>
        Type coercion is the automatic or implicit conversion of values from one data type to another. Understanding coercion is crucial for avoiding unexpected behaviors in JavaScript.
      </p>

      <h2>Implicit vs Explicit Coercion</h2>
      <pre><code className="language-javascript">{`// Implicit coercion
"5" + 3    // "53" (string)
"5" - 3    // 2 (number)
5 + true   // 6 (number)
10 + false // 10 (number)

// Explicit coercion
Number("5")     // 5
String(123)     // "123"
Boolean(1)      // true
parseInt("123") // 123`}</code></pre>

      <h2>Truthy and Falsy Values</h2>
      <pre><code className="language-javascript">{`// Falsy values
console.log(Boolean(false))     // false
console.log(Boolean(0))         // false
console.log(Boolean(""))        // false
console.log(Boolean(null))      // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN))       // false

// Truthy values
console.log(Boolean(true))      // true
console.log(Boolean(1))         // true
console.log(Boolean("hello"))   // true
console.log(Boolean([]))        // true
console.log(Boolean({}))        // true
console.log(Boolean(function(){})) // true`}</code></pre>

      <h2>Equality Comparisons</h2>
      <pre><code className="language-javascript">{`// Double equals (with coercion)
null == undefined   // true
"0" == false       // true
1 == true          // true
[] == false        // true
"" == 0            // true

// Triple equals (no coercion)
null === undefined  // false
"0" === false      // false
1 === true         // false
[] === false       // false
"" === 0           // false`}</code></pre>

      <h2>Common Gotchas</h2>
      <pre><code className="language-javascript">{`// Array operations
[] + []           // "" (empty string)
[] + {}           // "[object Object]"
{} + []           // 0 (in some browsers)

// Number coercion
1 + "2" + 3       // "123"
1 + 2 + "3"       // "33"
+"42"             // 42 (number)
-"42"             // -42 (number)

// Boolean operations
!!"hello"         // true
!!""             // false
!![]             // true
!!0              // false`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>Why should you use === instead of ==?</li>
        <li>How does JavaScript coerce values in boolean contexts?</li>
        <li>What are the rules for + operator with different types?</li>
        <li>How does Array.prototype.join() handle type coercion?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use === for equality comparisons</li>
        <li>Explicitly convert types when needed</li>
        <li>Be careful with mathematical operations on strings</li>
        <li>Understand falsy values in conditional statements</li>
        <li>Use Boolean() for explicit boolean conversion</li>
      </ul>
    </article>
  );
} 