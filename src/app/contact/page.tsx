import Link from 'next/link';

export default function ContactPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Connect & Contact</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Get in touch with Riley Brown and stay connected across all platforms for the latest in AI education
            and mobile development.
          </p>

          {/* Social Media Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <a
              href="#"
              className="group bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="text-xl font-semibold">TikTok</h3>
                  <p className="text-pink-100">@RileyBrownAI</p>
                  <p className="text-sm text-pink-100">620K+ followers</p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">💼</div>
                <div>
                  <h3 className="text-xl font-semibold">LinkedIn</h3>
                  <p className="text-blue-100">Riley Brown</p>
                  <p className="text-sm text-blue-100">Professional Updates</p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group bg-gradient-to-r from-gray-800 to-black rounded-xl p-8 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">🐦</div>
                <div>
                  <h3 className="text-xl font-semibold">Twitter/X</h3>
                  <p className="text-gray-300">@RileyVibeCode</p>
                  <p className="text-sm text-gray-300">Tech Insights</p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group bg-gradient-to-r from-red-500 to-red-700 rounded-xl p-8 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">🎥</div>
                <div>
                  <h3 className="text-xl font-semibold">YouTube</h3>
                  <p className="text-red-100">Riley Brown Tech</p>
                  <p className="text-sm text-red-100">Long-form Tutorials</p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">📸</div>
                <div>
                  <h3 className="text-xl font-semibold">Instagram</h3>
                  <p className="text-purple-100">@RileyBrownAI</p>
                  <p className="text-sm text-purple-100">Behind the Scenes</p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="text-xl font-semibold">VibeCode</h3>
                  <p className="text-green-100">Official Platform</p>
                  <p className="text-sm text-green-100">Build Apps Now</p>
                </div>
              </div>
            </a>
          </div>

          {/* Business Inquiries */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Inquiries</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Speaking Engagements</h3>
                <p className="text-gray-700 mb-4">
                  Invite Riley to speak at your conference, workshop, or corporate event about AI education,
                  mobile development, and the future of technology.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Topics Include:</strong><br />
                  • AI-Powered Development<br />
                  • Entrepreneurship in Tech<br />
                  • The Future of Mobile Apps<br />
                  • Vibe Coding Methodology
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Collaboration Opportunities</h3>
                <p className="text-gray-700 mb-4">
                  Interested in partnering with Riley or VibeCode? We're always open to exploring
                  strategic partnerships, sponsorships, and collaborative projects.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Partnership Areas:</strong><br />
                  • Educational Content<br />
                  • Technology Partnerships<br />
                  • Investment Opportunities<br />
                  • Media Collaborations
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                business@vibecode.com
              </button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">
              Subscribe to Riley's newsletter for the latest AI development insights, VibeCode updates,
              and exclusive tutorials delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Community */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join the Community</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with thousands of developers, entrepreneurs, and creators who are building the future
              with AI-powered tools and vibe coding methodology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chat"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Chat with Riley
              </Link>
              <button className="border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Join Discord Community
              </button>
            </div>
          </div>

          {/* Response Time */}
          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="text-yellow-600">⏰</div>
              <div>
                <h3 className="font-semibold text-yellow-800">Response Time</h3>
                <p className="text-yellow-700 text-sm">
                  Due to high volume, business inquiries typically receive a response within 3-5 business days.
                  For immediate questions about development or tutorials, try the AI chat feature!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}