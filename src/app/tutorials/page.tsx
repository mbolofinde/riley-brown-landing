import Link from 'next/link';

export default function TutorialsPage() {
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

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Video Tutorials & Content</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Learn AI-powered app development and vibe coding through Riley's comprehensive video tutorials
            and educational content.
          </p>

          {/* Tutorial Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Getting Started</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Introduction to Vibe Coding</li>
                <li>• Setting Up Your Development Environment</li>
                <li>• Your First AI-Powered App</li>
                <li>• Understanding VibeCode Platform</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Advanced Techniques</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• AI Integration Strategies</li>
                <li>• Complex App Architectures</li>
                <li>• Performance Optimization</li>
                <li>• Cross-Platform Development</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Business & Monetization</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Building MVPs Quickly</li>
                <li>• App Store Optimization</li>
                <li>• Monetization Strategies</li>
                <li>• Scaling Your App Business</li>
              </ul>
            </div>
          </div>

          {/* Featured Tutorials */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Tutorials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">📹 Video Preview</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Build Your First App in 10 Minutes
                </h3>
                <p className="text-gray-600 mb-4">
                  Watch Riley demonstrate the power of vibe coding by building a complete mobile app
                  from scratch in just 10 minutes using AI-powered tools.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">15:32 • Beginner</span>
                  <button className="text-blue-600 font-medium hover:text-blue-800">
                    Watch Tutorial
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">📹 Video Preview</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Advanced AI Integration Techniques
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to integrate sophisticated AI features into your apps, including natural
                  language processing and computer vision capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">28:45 • Advanced</span>
                  <button className="text-blue-600 font-medium hover:text-blue-800">
                    Watch Tutorial
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">📹 Video Preview</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  From Idea to App Store in 24 Hours
                </h3>
                <p className="text-gray-600 mb-4">
                  Follow along as Riley takes a simple app idea and turns it into a published
                  application ready for the App Store in just one day.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">42:18 • Intermediate</span>
                  <button className="text-blue-600 font-medium hover:text-blue-800">
                    Watch Tutorial
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">📹 Video Preview</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Monetizing Your AI-Powered Apps
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover various monetization strategies for AI-powered apps and learn how to
                  build sustainable revenue streams from your creations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">35:12 • Business</span>
                  <button className="text-blue-600 font-medium hover:text-blue-800">
                    Watch Tutorial
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* TikTok Content */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 mb-12 text-white">
            <h2 className="text-2xl font-bold mb-4">TikTok Educational Content</h2>
            <p className="mb-6">
              Follow Riley on TikTok for bite-sized tutorials, tips, and insights into AI development.
              With over 620K followers and 8.7M likes, Riley's TikTok is the go-to source for AI education.
            </p>
            <div className="flex items-center space-x-6">
              <div>
                <div className="text-2xl font-bold">620K+</div>
                <div className="text-pink-100">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">8.7M+</div>
                <div className="text-pink-100">Likes</div>
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-pink-100">Educational Videos</div>
              </div>
            </div>
            <button className="mt-6 bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Follow on TikTok
            </button>
          </div>

          {/* Learning Path */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Learning Path</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Introduction to Vibe Coding</h3>
                  <p className="text-gray-600 text-sm">Understand the fundamentals and philosophy</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Build Your First App</h3>
                  <p className="text-gray-600 text-sm">Hands-on experience with the basics</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Advanced AI Features</h3>
                  <p className="text-gray-600 text-sm">Integrate complex AI capabilities</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Launch and Monetize</h3>
                  <p className="text-gray-600 text-sm">Take your app to market successfully</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/chat" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Personalized Learning Guidance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}