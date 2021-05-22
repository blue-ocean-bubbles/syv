import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function AppBar(props) {
  return (
    <nav className="bg-white flex items-center shadow-md">
      <div className="p-4 cursor-pointer inline-block">
        <Link href="/">
          <Image src="/logo.jpeg" width="56px" height="56px" />
        </Link>
      </div>
      <div className="p-4 cursor-pointer inline-block">
        <Link href="/">
          <span className="font-bold text-gray-800 text-2xl">Secure Your Vote</span>
        </Link>
      </div>
    </nav>
  );
};