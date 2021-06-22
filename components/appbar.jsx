import React from 'react';

import Router, { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
  size: 5,
  color: '#7C3AED',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function AppBar() {
  const router = useRouter();

  const handleLogout = () => {
    fetch('/api/auth/logout')
      .then(() => router.push('/'));
  };

  return (
    <nav className="bg-whitesmoke flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <div className="p-4 flex">
          <Link href="/">
            <>
              <Image src="/logo.png" width="64px" height="64px" className="hover:shadow-xl transition-all cursor-pointer" alt="logo" />
            </>
          </Link>
        </div>
        <div className="pt-4 pb-5 cursor-pointer inline-block">
          <Link href="/">
            <span className="font-bold text-gray-800 text-2xl hover:text-shadow transition-all cursor-pointer">Secure Your Vote</span>
          </Link>
        </div>
      </div>
      <div id="action-buttons">
        <button type="button" className="btn btn-purple mr-4 flex items-center gap-x-2" onClick={handleLogout}>
          Logout
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
