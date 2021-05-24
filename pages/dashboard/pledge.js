import React from 'react';
import Dashboard from '../../components/dashboard';


export default function Pledge() {
  return (
    <Dashboard>
      <iframe src="https://pledge.vote.org/?partner=111111&campaign=free-tools" className="h-full w-full pt-4"></iframe>
    </Dashboard>
  );
};