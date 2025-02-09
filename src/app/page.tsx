import React from "react";
import Link from "next/link";
import { questionsList } from "./questions/questionsList";
import { Categories, Question } from "./types";

export default function Home() {
  // Group questions by category
  const categories: Categories = {
    core: {
      title: "Core JavaScript",
      description: "Master fundamental concepts like closures, prototypes, and scope",
      slugs: ['what-is-closure', 'explain-prototypes', 'hoisting', 'this-keyword', 'scope-chain', 'var-let-const']
    },
    async: {
      title: "Asynchronous JavaScript",
      description: "Deep dive into promises, async/await, and the event loop",
      slugs: ['event-loop', 'promises-async-await', 'async-patterns']
    },
    patterns: {
      title: "Design Patterns",
      description: "Learn essential patterns for writing maintainable code",
      slugs: ['design-patterns', 'object-creation', 'modules-imports', 'error-handling']
    },
    performance: {
      title: "Performance",
      description: "Optimize your applications for better user experience",
      slugs: ['performance-optimization', 'memory-management', 'dom-manipulation']
    },
    modern: {
      title: "Modern JavaScript",
      description: "Stay current with ES6+, TypeScript, and modern APIs",
      slugs: ['es6-features', 'typescript-basics', 'web-storage', 'web-apis']
    },
    testing: {
      title: "Testing & Security",
      description: "Build reliable and secure applications",
      slugs: ['testing-approaches', 'security-best-practices']
    }
  };

  const getCategoryQuestions = (categorySlugs: string[]): Question[] => {
    return questionsList.filter(q => categorySlugs.includes(q.slug));
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 lg:min-h-screen p-6 border-r border-black/[.08] dark:border-white/[.145] overflow-y-auto">
        <div className="sticky top-6">
          <h2 className="text-xl font-bold mb-4">All Topics</h2>
          <nav className="space-y-6" data-testid="categories-sidebar">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key}>
                <h3 
                  className="text-lg font-semibold mb-2 capitalize"
                  data-testid={`category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {getCategoryQuestions(category.slugs).map((q) => (
                    <li key={q.slug}>
                      <Link
                        href={`/questions/${q.slug}`}
                        className="block p-2 rounded-lg hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors"
                      >
                        {q.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            Master JavaScript Interview Questions
          </h1>
          
          <p className="text-lg text-foreground/80 mb-12">
            Level up your JavaScript interview preparation with our comprehensive collection of real-world questions and expert explanations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key} className="p-6 rounded-xl border border-black/[.08] dark:border-white/[.145]">
                <h3 className="font-bold text-xl mb-3">{category.title}</h3>
                <p className="text-foreground/80 mb-4">{category.description}</p>
                <div className="text-sm text-foreground/60">
                  {category.slugs.length} topics
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 px-8"
              href="/questions/what-is-closure"
            >
              Start Learning Now
            </Link>
            <Link
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-12 px-8"
              href="#categories"
            >
              Browse by Category
            </Link>
          </div>

          <div className="mt-20 pt-12 border-t border-black/[.08] dark:border-white/[.145]">
            <h2 className="text-2xl font-bold mb-6">Why Choose This Resource?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">✓ Comprehensive Coverage</h3>
                <p className="text-foreground/70">From fundamentals to advanced concepts, everything you need in one place.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">✓ Real-world Examples</h3>
                <p className="text-foreground/70">Based on actual interview questions from top tech companies.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">✓ Best Practices</h3>
                <p className="text-foreground/70">Learn not just the what, but the why and how of JavaScript.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">✓ Regular Updates</h3>
                <p className="text-foreground/70">Stay current with the latest JavaScript features and practices.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
