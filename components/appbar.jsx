import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function AppBar() {
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
        <button type="button" className="btn btn-blue mr-4 flex items-center gap-x-2">
          Logout
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </nav>
  );
};