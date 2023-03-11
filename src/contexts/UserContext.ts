import { createContext } from 'react';

interface IUserContext {
  username: string;
  setUsername: (username: string) => void;
}

export const UserContext = createContext<IUserContext>({
  username: '',
  setUsername: () => undefined,
});

export const UserContextProvider = UserContext.Provider;
