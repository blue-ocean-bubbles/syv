import React from 'react';
import Dashboard from '../../components/dashboard';


export default function Reminder() {
  return (
    <Dashboard>
      <iframe src="https://reminders.vote.org/?partner=111111&campaign=free-tools" className="h-full w-full pt-4"></iframe>
    </Dashboard>
  );
};