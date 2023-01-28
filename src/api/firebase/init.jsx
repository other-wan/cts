import { getApps, initializeApp } from 'firebase/app';
import { signOut, getAuth } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeTokenCookie, setTokenCookie } from './authToken';

export default function initFirebase() {
  if (!getApps().length) {
    return initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    });
  }
}

export const APP = initFirebase();
export const AUTH = getAuth(APP);

export const AuthContext = createContext({
  user: null,
  logout: () => null,
  isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authListener = AUTH.onIdTokenChanged(async (_user) => {
      if (_user) {
        setTokenCookie(await _user.getIdToken());
        setUser(_user);
      } else {
        removeTokenCookie();
        setUser(null);
      }
    });

    authListener();

    return () => authListener();
  }, []);

  const logout = () =>
    signOut(AUTH)
      .then(() => navigate('/'))
      .catch((error) => console.error(error));

  return (
    <AuthContext.Provider value={{ user, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
