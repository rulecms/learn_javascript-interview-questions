export default function TestingApproachesPage() {
  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>Testing Approaches in JavaScript</h1>
      
      <p>
        Testing is crucial for maintaining reliable JavaScript applications. Understanding different testing approaches and tools helps ensure code quality and prevent regressions.
      </p>

      <h2>Unit Testing</h2>
      <pre><code className="language-javascript">{`// Jest Example
describe('Calculator', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calculator();
  });
  
  test('adds two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  
  test('throws error for invalid input', () => {
    expect(() => calculator.add('2', 3))
      .toThrow('Invalid input');
  });
});

// Testing async functions
test('fetches user data', async () => {
  const data = await fetchUserData(1);
  expect(data).toMatchObject({
    id: 1,
    name: expect.any(String)
  });
});`}</code></pre>

      <h2>Integration Testing</h2>
      <pre><code className="language-javascript">{`// Testing API integration
describe('UserService', () => {
  it('creates and retrieves user', async () => {
    // Create user
    const user = await UserService.create({
      name: 'John',
      email: 'john@example.com'
    });
    
    // Retrieve user
    const retrieved = await UserService.get(user.id);
    expect(retrieved).toEqual(user);
  });
});

// Testing component integration
describe('ShoppingCart', () => {
  it('updates total when adding items', async () => {
    const cart = new ShoppingCart();
    const product = await ProductService.get(1);
    
    await cart.addItem(product);
    expect(cart.total).toBe(product.price);
  });
});`}</code></pre>

      <h2>E2E Testing</h2>
      <pre><code className="language-javascript">{`// Cypress Example
describe('Login Flow', () => {
  it('successfully logs in', () => {
    cy.visit('/login');
    cy.get('[data-test=email]')
      .type('user@example.com');
    cy.get('[data-test=password]')
      .type('password123');
    cy.get('[data-test=submit]')
      .click();
    cy.url().should('include', '/dashboard');
  });
});

// Playwright Example
test('user registration', async ({ page }) => {
  await page.goto('/register');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});`}</code></pre>

      <h2>Testing Best Practices</h2>
      <pre><code className="language-javascript">{`// Arrange-Act-Assert Pattern
test('updates user profile', async () => {
  // Arrange
  const user = await createTestUser();
  const newData = { name: 'New Name' };
  
  // Act
  await updateProfile(user.id, newData);
  
  // Assert
  const updated = await getUser(user.id);
  expect(updated.name).toBe(newData.name);
});

// Test Doubles
const mockUserService = {
  getUser: jest.fn(),
  updateUser: jest.fn()
};

test('handles error gracefully', async () => {
  mockUserService.getUser.mockRejectedValue(new Error());
  
  await expect(getUserProfile(1))
    .rejects.toThrow();
});`}</code></pre>

      <h2>Common Interview Follow-up Questions</h2>
      <ol>
        <li>What's the difference between unit and integration tests?</li>
        <li>How do you decide what to test?</li>
        <li>What are the benefits of TDD?</li>
        <li>How do you handle testing async code?</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Write tests before fixing bugs</li>
        <li>Keep tests focused and isolated</li>
        <li>Use meaningful test descriptions</li>
        <li>Follow the AAA pattern</li>
        <li>Maintain test coverage standards</li>
      </ul>
    </article>
  );
} 