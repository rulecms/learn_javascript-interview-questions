import { render, screen } from '@testing-library/react';
import ThisKeywordPage from '../this-keyword/page';
import ClosurePage from '../what-is-closure/page';
import NullUndefinedPage from '../null-undefined/page';
import PrototypeInheritancePage from '../prototype-inheritance/page';
import EventLoopPage from '../event-loop/page';
import PromisesAsyncAwaitPage from '../promises-async-await/page';
import VarLetConstPage from '../var-let-const/page';
import ES6FeaturesPage from '../es6-features/page';
import EventDelegationPage from '../event-delegation/page';
import ScopeChainPage from '../scope-chain/page';
import MemoryManagementPage from '../memory-management/page';
import ObjectCreationPage from '../object-creation/page';
import ArrayMethodsPage from '../array-methods/page';
import DOMManipulationPage from '../dom-manipulation/page';
import ErrorHandlingPage from '../error-handling/page';
import TypeCoercionPage from '../type-coercion/page';
import WebAPIsPage from '../web-apis/page';
import CallApplyBindPage from '../call-apply-bind/page';
import HoistingPage from '../hoisting/page';
import ExplainPrototypesPage from '../explain-prototypes/page';
import TypeScriptBasicsPage from '../typescript-basics/page';
import PerformanceOptimizationPage from '../performance-optimization/page';
import SecurityBestPracticesPage from '../security-best-practices/page';
import TestingApproachesPage from '../testing-approaches/page';
import DesignPatternsPage from '../design-patterns/page';
import ModulesImportsPage from '../modules-imports/page';
import AsyncPatternsPage from '../async-patterns/page';
import WebStoragePage from '../web-storage/page';

// Helper function to test common page structure
const testPageStructure = (Page: React.ComponentType, title: string) => {
  describe(title, () => {
    it('renders the page with correct heading', () => {
      render(<Page />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it('renders as an article with prose styling', () => {
      render(<Page />);
      const article = screen.getByRole('article');
      expect(article).toHaveClass('prose', 'prose-lg', 'dark:prose-invert');
    });

    // it('contains code examples', () => {
    //   render(<Page />);
    //   const codeBlocks = screen.getAllByRole('code');
    //   expect(codeBlocks.length).toBeGreaterThan(0);
    // });

    // it('includes best practices section', () => {
    //   render(<Page />);
    //   const bestPractices = screen.getByRole('heading', { 
    //     name: /best practices/i 
    //   });
    //   expect(bestPractices).toBeInTheDocument();
    // });
  });
};

// Test all pages
testPageStructure(ThisKeywordPage, 'This Keyword Page');
testPageStructure(ClosurePage, 'Closure Page');
testPageStructure(NullUndefinedPage, 'Null vs Undefined Page');
testPageStructure(PrototypeInheritancePage, 'Prototype Inheritance Page');
testPageStructure(EventLoopPage, 'Event Loop Page');
testPageStructure(PromisesAsyncAwaitPage, 'Promises and Async/Await Page');
testPageStructure(VarLetConstPage, 'var, let, and const Page');
testPageStructure(ES6FeaturesPage, 'ES6+ Features Page');
testPageStructure(EventDelegationPage, 'Event Delegation Page');
testPageStructure(ScopeChainPage, 'Scope Chain Page');
testPageStructure(MemoryManagementPage, 'Memory Management Page');
testPageStructure(ObjectCreationPage, 'Object Creation Page');
testPageStructure(ArrayMethodsPage, 'Array Methods Page');
testPageStructure(DOMManipulationPage, 'DOM Manipulation Page');
testPageStructure(ErrorHandlingPage, 'Error Handling Page');
testPageStructure(TypeCoercionPage, 'Type Coercion Page');
testPageStructure(WebAPIsPage, 'Web APIs Page');
testPageStructure(CallApplyBindPage, 'Call, Apply, and Bind Page');
testPageStructure(HoistingPage, 'Hoisting Page');
testPageStructure(ExplainPrototypesPage, 'Explain Prototypes Page');
testPageStructure(TypeScriptBasicsPage, 'TypeScript Basics Page');
testPageStructure(PerformanceOptimizationPage, 'Performance Optimization Page');
testPageStructure(SecurityBestPracticesPage, 'Security Best Practices Page');
testPageStructure(TestingApproachesPage, 'Testing Approaches Page');
testPageStructure(DesignPatternsPage, 'Design Patterns Page');
testPageStructure(ModulesImportsPage, 'Modules and Imports Page');
testPageStructure(AsyncPatternsPage, 'Async Patterns Page');
testPageStructure(WebStoragePage, 'Web Storage Page'); 