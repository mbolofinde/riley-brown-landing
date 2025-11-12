import Link from 'next/link';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Vibe Coding Methodology</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is "Vibe Coding"?</h2>
            <p className="text-gray-700 mb-6">
              "Vibe Coding" is Riley Brown's revolutionary approach to software development that combines human intuition
              with artificial intelligence. This methodology breaks down traditional barriers between idea conception and
              app creation, enabling anyone to build functional mobile applications by "vibing" with AI tools rather than
              wrestling with complex code syntax.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Principles</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Intuitive Problem-Solving</h3>
                <p className="text-gray-700">
                  Start with your natural understanding of the problem. Don't get bogged down in technical constraints
                  - think about what you want to achieve and let AI help bridge the gap to implementation.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. AI as a Creative Partner</h3>
                <p className="text-gray-700">
                  View AI not as a tool but as a collaborative partner. Engage in a dialogue with AI systems,
                  iterating on ideas and refining solutions together rather than trying to command perfect results.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Rapid Iteration Over Perfection</h3>
                <p className="text-gray-700">
                  Embrace the "ship it and improve it" mentality. Build working prototypes quickly,
                  test them with real users, and iterate based on feedback rather than planning endlessly.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Natural Language Programming</h3>
                <p className="text-gray-700">
                  Describe what you want in plain English. Modern AI can translate your intentions into functional code,
                  eliminating the need to learn complex programming languages before building your ideas.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Vibe Coding Process</h2>
            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Vibe Check</h3>
                <p className="text-gray-700">
                  Start by clearly articulating your app idea in natural language. What problem does it solve?
                  Who is it for? What would success look like? Don't worry about technical implementation yet.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: AI Collaboration</h3>
                <p className="text-gray-700">
                  Engage with AI tools to explore different approaches to your problem. Ask questions, brainstorm features,
                  and let the AI suggest technical solutions while you focus on user experience and value creation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibent text-gray-900 mb-3">Step 3: Rapid Prototyping</h3>
                <p className="text-gray-700">
                  Use AI-powered development tools to quickly build a working prototype. Don't aim for perfection—
                  aim for something that demonstrates your core concept and can be tested with real users.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Vibe Iteration</h3>
                <p className="text-gray-700">
                  Test your prototype, gather feedback, and iterate. Use AI to quickly implement changes and improvements.
                  Keep the feedback loop tight and continue refining until you've captured the right "vibe."
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Accessibility:</strong> No technical background required to start building apps</li>
              <li><strong>Speed:</strong> Go from idea to working prototype in minutes instead of months</li>
              <li><strong>Creativity:</strong> Focus on innovation and user experience rather than technical constraints</li>
              <li><strong>Cost-effective:</strong> Significantly reduce development costs and time-to-market</li>
              <li><strong>Iterative:</strong> Easily adapt and improve based on user feedback and market demands</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Real-World Applications</h2>
            <p className="text-gray-700 mb-6">
              The Vibe Coding methodology has been successfully applied across various industries and use cases:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Startup MVPs</h3>
                <p className="text-gray-700 text-sm">
                  Entrepreneurs can quickly validate their ideas by building functional prototypes
                  without hiring expensive development teams.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Solutions</h3>
                <p className="text-gray-700 text-sm">
                  Companies can rapidly develop internal tools and customer-facing applications
                  to solve specific business problems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational Tools</h3>
                <p className="text-gray-700 text-sm">
                  Educators and trainers can create custom learning applications tailored
                  to their specific curricula and student needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Projects</h3>
                <p className="text-gray-700 text-sm">
                  Artists, designers, and creators can build interactive experiences
                  and digital art installations without technical barriers.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Future of Development</h2>
            <p className="text-gray-700 mb-6">
              Vibe Coding represents a fundamental shift in how we approach software development. As AI becomes more
              sophisticated, the methodology continues to evolve, making app development even more accessible and
              intuitive. Riley's vision is a world where every great idea can become a reality, regardless of the
              creator's technical background.
            </p>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Vibe Coding?</h3>
              <p className="mb-4">
                Join the revolution in software development. Learn how to build apps by vibing with AI
                and turn your ideas into reality faster than ever before.
              </p>
              <div className="flex space-x-4">
                <Link href="/chat" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Chat with Riley
                </Link>
                <Link href="/tutorials" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Watch Tutorials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}