import { useEffect, useState } from 'react';
import firebaseInitialize from '../Firebase/firebaseInitialize';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // auth
  const auth = getAuth();

  // signin with email and password
  const signupWithEmailAndPassword = (
    name,
    email,
    password,
    passwordConfirm,
    employeeId,
    role,
    phoneNumber
  ) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUserToDb(
          name,
          email,
          password,
          passwordConfirm,
          employeeId,
          role,
          phoneNumber
        );
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // sign in with email and password
  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        saveLoginInfoToDb(email, password);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // save user to database
  const saveUserToDb = (
    name,
    email,
    password,
    passwordConfirm,
    employeeId,
    role,
    phoneNumber
  ) => {
    const user = {
      name,
      email,
      password,
      passwordConfirm,
      employeeId,
      role,
      phoneNumber,
    };
    fetch('https://staging-api.erpxbd.com/api/v1/users/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  //   save login infon to database
  const saveLoginInfoToDb = (email, password) => {
    const user = { email, password };
    fetch('https://staging-api.erpxbd.com/api/v1/users/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  // logout
  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, []);

  return {
    user,
    error,
    loading,
    signupWithEmailAndPassword,
    loginWithEmailAndPassword,
    logout,
  };
};

export default useFirebase;
