import React from 'react';
import Dashboard from '../../components/dashboard';

export default function checkRegistration() {
  return (
    <Dashboard>
      <iframe src="https://absentee.vote.org/?partner=111111&campaign=free-tools" className="h-full w-full pt-4" title="absentee" />
    </Dashboard>
  );
}
