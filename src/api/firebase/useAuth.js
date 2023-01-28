import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { AuthContext } from 'api/firebase/init';
import { AUTH } from 'api/firebase/init';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const init = ({ email, password }) => {
    createUserWithEmailAndPassword(AUTH, email, password)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => setError(error));
  };

  return { init, error };
};

export const useLogin = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const init = ({ email, password }) => {
    signInWithEmailAndPassword(AUTH, email, password)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => setError(error));
  };

  return { init, error };
};

export default function useAuth() {
  return useContext(AuthContext);
}
