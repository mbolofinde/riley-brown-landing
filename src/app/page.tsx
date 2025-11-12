'use client';

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import SignInButton from "@/components/auth/SignInButton";
import SignOutButton from "@/components/auth/SignOutButton";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-between items-center mb-8">
            <div></div>
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Welcome, {user.displayName}</span>
                  <SignOutButton />
                </div>
              ) : (
                <SignInButton />
              )}
            </div>
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Riley Brown
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            AI Educator & Founder of VibeCode
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Building the future of mobile app development through AI-powered tools and "vibe coding"
          </p>
        </header>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/about" className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Riley</h3>
              <p className="text-gray-600">Learn about Riley's journey as the co-founder of VibeCode and AI educator with 620K+ followers</p>
            </div>
          </Link>

          <Link href="/vibecode" className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">VibeCode Platform</h3>
              <p className="text-gray-600">Discover the AI-powered mobile development platform that raised $9 million in funding</p>
            </div>
          </Link>

          <Link href="/methodology" className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vibe Coding</h3>
              <p className="text-gray-600">Learn about the revolutionary methodology that lets anyone build apps in minutes</p>
            </div>
          </Link>

          {user && (
            <Link href="/chat" className="group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-4">💬 Chat with Riley</h3>
                <p className="text-blue-100">Ask Riley about AI, mobile development, and vibe coding methodology</p>
              </div>
            </Link>
          )}

          <Link href="/tutorials" className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tutorials</h3>
              <p className="text-gray-600">Video tutorials and educational content for AI-powered app development</p>
            </div>
          </Link>

          <Link href="/contact" className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Connect</h3>
              <p className="text-gray-600">Get in touch and connect with Riley across social platforms</p>
            </div>
          </Link>
        </div>

        {/* Bio Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Riley Brown</h2>
          <div className="grid md:grid-cols-1 gap-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Riley Brown is the co-founder of VibeCode, an AI-powered mobile app development platform that has raised $9 million in funding. Known as "The number one AI Educator" on TikTok with over 620K followers and 8.7M likes, Riley has revolutionized app development through his innovative "vibe coding" methodology.
            </p>
            <p>
              His approach allows anyone to build functional mobile applications using AI tools, regardless of technical background. Through comprehensive tutorials and educational content, Riley demonstrates how to create apps in minutes rather than months, democratizing software development for creators and entrepreneurs worldwide.
            </p>
          </div>
        </div>

        {!user && (
          <div className="text-center mt-12 p-8 bg-blue-50 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to chat with Riley?
            </h3>
            <p className="text-gray-600 mb-6">
              Sign in to access Riley's AI chat and get personalized advice on mobile development and vibe coding.
            </p>
            <SignInButton />
          </div>
        )}
      </div>
    </div>
  );
}
