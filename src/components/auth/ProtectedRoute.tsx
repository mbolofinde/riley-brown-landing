'use client';

import { useAuth } from '@/contexts/AuthContext';
import SignInButton from './SignInButton';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        {fallback || (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Riley's Platform
              </h1>
              <p className="text-gray-600 max-w-md">
                Sign in with Google to access Riley's AI chat and community features.
              </p>
            </div>
            <SignInButton />
          </>
        )}
      </div>
    );
  }

  return <>{children}</>;
}