import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import AppBar from '../appbar';

export default function Dashboard({ children }) {
  const router = useRouter();

  const links = [
    {
      path: '',
      display: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      path: '/register',
      display: 'Register To Vote',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
          <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
        </svg>
      ),
    },
    {
      path: '/registration-status',
      display: 'Check Registration Status',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const createLink = (link) => {
    let styles = 'text-lg font-bold cursor-pointer px-4 py-4 transition-colors flex items-center gap-x-4 ';

    if (router.pathname === `/dashboard${link.path}`) {
      styles += 'text-white bg-white bg-opacity-30 shadow-sm';
    } else {
      styles += 'text-white hover:bg-white hover:bg-opacity-50';
    }

    return (
      <div className={styles} onClick={(e) => router.push(`/dashboard${link.path}`)} role="button">
        {link.icon}
        {' '}
        {link.display}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Secure Your Vote - Dashboard</title>
      </Head>
      <AppBar />
      <div className="flex flex-row flex-grow h-full">
        <div className="w-1/6 h-full shadow-xl z-1 bg-gradient-to-br from-blue-600 to-blue-700">
          <nav className="flex flex-col gap-y-4 mt-8">
            {links.map((link, i) => <React.Fragment key={i}>{createLink(link)}</React.Fragment>)}
          </nav>
        </div>
        <div className="flex-grow h-full z-0">
          {children}
        </div>
      </div>
    </div>
  );
}
