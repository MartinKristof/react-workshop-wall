export const isServer = typeof window === 'undefined';

export const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    if (isServer) {
      return;
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Any error occured with localstorage', error);

      throw error;
    }
  };

  const getItem = (): string => {
    if (isServer) {
      return '';
    }

    try {
      if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key) || '');
      }

      return '';
    } catch (error) {
      console.error('Any error occured with localstorage', error);

      throw error;
    }
  };

  const removeItem = () => {
    if (isServer) {
      return;
    }

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Any error occured with localstorage', error);

      throw error;
    }
  };

  return { setItem, getItem, removeItem };
};
