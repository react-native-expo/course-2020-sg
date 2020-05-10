import React, { useEffect, useContext } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useAuth();
  const x = useNavigation();
  
  useEffect(() => {
    tryLocalSignin && tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
