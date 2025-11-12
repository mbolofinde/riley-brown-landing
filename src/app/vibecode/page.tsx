import Link from 'next/link';

export default function VibeCodePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">VibeCode Platform</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Revolutionizing Mobile App Development</h2>
            <p className="text-gray-700 mb-6">
              VibeCode is an AI-powered mobile app development platform that has successfully raised $9 million in funding.
              Co-founded by Riley Brown, this innovative platform represents the future of software development, where
              artificial intelligence meets human creativity to produce extraordinary results.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features & Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Development</h3>
                <p className="text-gray-700">
                  Leverage advanced AI algorithms to generate, optimize, and debug code automatically,
                  reducing development time from months to minutes.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No-Code Interface</h3>
                <p className="text-gray-700">
                  Build complex mobile applications without writing a single line of code,
                  using intuitive drag-and-drop interfaces and visual programming tools.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Platform Support</h3>
                <p className="text-gray-700">
                  Deploy your apps simultaneously to iOS and Android platforms,
                  maximizing your reach with minimal effort.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Collaboration</h3>
                <p className="text-gray-700">
                  Work with team members in real-time, sharing ideas and building together
                  in a collaborative development environment.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The "Vibe Coding" Methodology</h2>
            <p className="text-gray-700 mb-6">
              At the heart of VibeCode is Riley's revolutionary "vibe coding" methodology. This approach combines:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Intuitive problem-solving techniques</li>
              <li>AI-assisted code generation and optimization</li>
              <li>Visual development interfaces</li>
              <li>Natural language programming capabilities</li>
              <li>Rapid prototyping and iteration tools</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-700 mb-6">
              VibeCode has empowered thousands of creators, entrepreneurs, and businesses to bring their mobile app ideas
              to life. From startup founders building their first MVP to established companies launching new products,
              the platform has demonstrated its versatility and effectiveness across various industries and use cases.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The $9 Million Vision</h2>
            <p className="text-gray-700 mb-6">
              The successful $9 million funding round reflects investors' confidence in VibeCode's mission to democratize
              software development. This funding enables the platform to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Expand AI capabilities and development tools</li>
              <li>Grow the team of world-class engineers and designers</li>
              <li>Scale platform infrastructure to serve millions of users</li>
              <li>Develop new features and integrations</li>
              <li>Support the growing community of VibeCode developers</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Future of Development</h2>
            <p className="text-gray-700 mb-6">
              VibeCode represents more than just a development platform—it's a paradigm shift toward a future where
              technology creation is limited only by imagination, not technical expertise. As AI continues to evolve,
              VibeCode is positioned at the forefront of this transformation, making app development accessible to
              anyone with a great idea and the drive to bring it to life.
            </p>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl mt-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Building?</h3>
              <p className="mb-4">
                Join thousands of creators who are already using VibeCode to build amazing mobile applications.
                Experience the future of development today.
              </p>
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Learn More About VibeCode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}