import React from 'react';
import { useRouter } from 'next/router';

import AppBar from './appbar';

export default function Dashboard({ children }) {
  const router = useRouter();

  const links = [
    { path: '', display: 'Home' },
    { path: '/register', display: 'Register To Vote' },
    { path: '/check-registration', display: 'Check Registration Status' },
    { path: '/reminder', display: 'Sign-up For Reminders' },
    { path: '/absentee-ballot', display: 'Request Absentee Ballot' },
    { path: '/pledge', display: 'Pledge to Vote' }
  ];

  const createLink = (link) => {
    let styles = 'text-lg font-bold cursor-pointer px-4 py-4 ';

    if (router.pathname === '/dashboard' + link.path) {
      styles += 'text-gray-800 bg-gray bg-opacity-80 shadow-sm';
    } else {
      styles += 'text-blue-200 hover:bg-white hover:bg-opacity-50';
    }

    return (
      <div className={styles} onClick={_ => router.push('/dashboard' + link.path)}>{link.display}</div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <AppBar />
      <div className="flex flex-row flex-grow h-full">
        <div className="w-1/6 h-full bg-blue-800 shadow-xl z-1">
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
};