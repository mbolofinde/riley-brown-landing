import Link from 'next/link';

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Riley Brown</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The AI Education Pioneer</h2>
            <p className="text-gray-700 mb-6">
              Riley Brown has emerged as one of the most influential voices in AI education and mobile app development.
              As the co-founder of VibeCode, he has successfully raised $9 million in funding to revolutionize how people
              approach software development through artificial intelligence.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Social Media Impact</h2>
            <p className="text-gray-700 mb-6">
              Known as "The number one AI Educator" on TikTok, Riley has amassed over 620,000 followers and 8.7 million likes
              through his engaging and accessible content. His ability to break down complex AI and development concepts into
              digestible, entertaining videos has made him a go-to resource for aspiring developers and entrepreneurs.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The "Vibe Coding" Revolution</h2>
            <p className="text-gray-700 mb-6">
              Riley's most significant contribution to the tech world is his innovative "vibe coding" methodology. This
              revolutionary approach combines intuitive thinking with AI-powered tools, allowing anyone to build functional
              mobile applications regardless of their technical background. Through this method, he has demonstrated that
              apps that traditionally took months to develop can now be created in minutes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">VibeCode Platform</h2>
            <p className="text-gray-700 mb-6">
              As the co-founder of VibeCode, Riley has built an AI-powered mobile app development platform that democratizes
              software creation. The platform embodies his vision of making app development accessible to creators and
              entrepreneurs worldwide, removing traditional barriers to entry in the tech space.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Educational Philosophy</h2>
            <p className="text-gray-700 mb-6">
              Riley believes that technology should be accessible to everyone, not just those with computer science degrees.
              His educational content focuses on practical applications, real-world examples, and encouraging people to think
              creatively about problem-solving with AI tools. He emphasizes that the future of development lies not in
              replacing human creativity, but in augmenting it with intelligent tools.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mission & Vision</h2>
            <p className="text-gray-700 mb-6">
              Through his work, Riley continues to push the boundaries of what's possible in AI-assisted development.
              His mission is to empower the next generation of creators and entrepreneurs by providing them with the tools,
              knowledge, and confidence to build their ideas into reality. He envisions a future where anyone with a great
              idea can bring it to life through the power of AI and intuitive development methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}