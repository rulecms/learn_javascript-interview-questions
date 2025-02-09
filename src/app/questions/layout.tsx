import Link from 'next/link';
import { questionsList } from './questionsList';

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 lg:min-h-screen p-6 border-r border-black/[.08] dark:border-white/[.145] overflow-y-auto">
        <div className="sticky top-6">
          <Link 
            href="/"
            className="block mb-6 text-lg font-bold hover:underline"
          >
            ← Back to Home
          </Link>
          <h2 className="text-xl font-bold mb-4">Interview Questions</h2>
          <nav className="space-y-2">
            {questionsList.map((q, index) => (
              <Link
                key={q.slug}
                href={`/questions/${q.slug}`}
                className="block p-2 rounded-lg hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors"
              >
                {index + 1}. {q.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
} 