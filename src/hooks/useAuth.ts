import { useLocalStorage } from './useLocalStorage';

const USER_KEY = 'user';

export const useAuth = () => {
  const { getItem, setItem, removeItem } = useLocalStorage(USER_KEY);

  const logIn = (value: string): boolean => {
    try {
      setItem(value);

      return true;
    } catch (error) {
      return false;
    }
  };

  const logOut = (): boolean => {
    try {
      removeItem();

      return true;
    } catch (error) {
      return false;
    }
  };

  const getUserFromStorage = (): string | null => {
    try {
      return getItem();
    } catch (error) {
      return null;
    }
  };

  return { logIn, logOut, getUserFromStorage };
};
