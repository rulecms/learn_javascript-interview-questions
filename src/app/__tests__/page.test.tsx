import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />);
    
    const heading = screen.getByRole('heading', { 
      name: 'Master JavaScript Interview Questions',
      level: 1 
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders all category sections in the sidebar', () => {
    render(<Home />);
    
    // Find the sidebar navigation
    const sidebar = screen.getByTestId('categories-sidebar');
    expect(sidebar).toBeInTheDocument();
    
    const categories = [
      'Core JavaScript',
      'Asynchronous JavaScript',
      'Design Patterns',
      'Performance',
      'Modern JavaScript',
      'Testing & Security'
    ];

    categories.forEach(category => {
      const categoryLink = screen.getByTestId(`category-${category.toLowerCase().replace(/\s+/g, '-')}`);
      expect(categoryLink).toBeInTheDocument();
      expect(categoryLink).toHaveTextContent(category);
    });
  });

  it('renders the call-to-action buttons', () => {
    render(<Home />);
    
    const startLearningButton = screen.getByRole('link', { 
      name: /start learning now/i 
    });
    const browseCategoriesButton = screen.getByRole('link', { 
      name: /browse by category/i 
    });
    
    expect(startLearningButton).toBeInTheDocument();
    expect(browseCategoriesButton).toBeInTheDocument();
  });
}); 