import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          Master JavaScript Interview Questions
        </h1>
        
        <p className="text-lg text-center sm:text-left text-foreground/80">
          Level up your JavaScript interview preparation with our comprehensive collection of real-world questions and expert explanations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
          <div className="p-6 rounded-xl border border-black/[.08] dark:border-white/[.145]">
            <h3 className="font-bold text-xl mb-3">📚 Comprehensive Coverage</h3>
            <p className="text-foreground/80">From closures to promises, prototypes to ES6+ features - master all key JavaScript concepts interviewers love to ask about.</p>
          </div>

          <div className="p-6 rounded-xl border border-black/[.08] dark:border-white/[.145]">
            <h3 className="font-bold text-xl mb-3">💡 Real-world Examples</h3>
            <p className="text-foreground/80">Practice with questions sourced from actual interviews at top tech companies, complete with detailed explanations.</p>
          </div>

          <div className="p-6 rounded-xl border border-black/[.08] dark:border-white/[.145]">
            <h3 className="font-bold text-xl mb-3">🎯 Interactive Learning</h3>
            <p className="text-foreground/80">Test your knowledge with hands-on coding challenges and get immediate feedback on your solutions.</p>
          </div>

          <div className="p-6 rounded-xl border border-black/[.08] dark:border-white/[.145]">
            <h3 className="font-bold text-xl mb-3">🚀 Interview Ready</h3>
            <p className="text-foreground/80">Build confidence with our curated path from fundamentals to advanced concepts that hiring managers expect.</p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 px-8"
            href="/start"
          >
            Start Learning Now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-12 px-8"
            href="/practice"
          >
            Practice Questions
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-foreground/70">
        <span>Made with ❤️ by <a 
          href="https://rulecms.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground hover:underline hover:underline-offset-4"
        >
          RuleCMS Team
        </a></span>
      </footer>
    </div>
  );
}
