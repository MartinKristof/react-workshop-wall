import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('useUserContext has to be used within <UserContext.Provider>');
  }

  const { username, setUsername } = userContext;

  return { username, setUsername };
};
