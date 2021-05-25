import React from 'react';
import Dashboard from '../../components/dashboard';

export default function Register() {
  return (
    <Dashboard>
      <iframe src="https://register.vote.org/?partner=111111&campaign=free-tools" className="h-full w-full pt-4" title="register" />
    </Dashboard>
  );
}
