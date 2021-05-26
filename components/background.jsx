import React from 'react';
import Image from 'next/image';

const Background = () => (
  <div className="absolute top-0 h-full w-full">
    <div className="absolute inline-block top-0 bg-gradient-to-r from-blue-900 via-blue-900 to-transparent" style={{ height: '500px', width: '100vw', zIndex: '-1' }}>
      <Image className="bg-center filter h-full relative opacity-60 contrast-120 brightness-40" style={{ zIndex: '-1' }} src="https://www.history.com/.image/t_share/MTU3ODc4NjgxMDkyNjk1MzY5/ask-bald-eagle-istock_000017215186large-2.jpg" alt="background" layout="fill" objectFit="cover" objectPosition="top center" />
    </div>
  </div>

);

export default Background;
