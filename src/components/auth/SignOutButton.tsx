'use client';

import { useState } from 'react';
import { signOut } from '@/lib/auth';

interface SignOutButtonProps {
  className?: string;
}

export default function SignOutButton({ className }: SignOutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await signOut();
    setLoading(false);
  };

  return (
    <button
      onClick={handleSignOut}
      disabled={loading}
      className={`
        px-4 py-2 text-red-600 border border-red-600 rounded-lg
        hover:bg-red-50 transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className || ''}
      `}
    >
      {loading ? 'Signing out...' : 'Sign Out'}
    </button>
  );
}