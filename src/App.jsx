import { Route, Routes } from 'react-router-dom';
import useAuth, { useLogin } from 'api/firebase/useAuth';

import Authenticated from 'layouts/Authenticated';
import Dashboard from 'pages/app/Dashboard';
import Reminder from 'pages/app/Reminder';
import Inbox from 'pages/app/Inbox';
import Outbox from 'pages/app/Outbox';
import Closed from 'pages/app/Closed';
import Drafts from 'pages/app/Drafts';
import { useEffect } from 'react';

export default function App() {
  const { isAuthenticated, logout } = useAuth();
  console.log(isAuthenticated);

  const { init, error } = useLogin();

  return (
    <Routes>
      <Route path="/" element={<Authenticated />}>
        <Route index path="dashboard" element={<Dashboard />} />
        <Route path="reminder" element={<Reminder />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="outbox" element={<Outbox />} />
        <Route path="closed" element={<Closed />} />
        <Route path="drafts" element={<Drafts />} />
      </Route>
    </Routes>
  );
}
