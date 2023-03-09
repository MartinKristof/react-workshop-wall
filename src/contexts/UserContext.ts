import { createContext } from 'react';

export type TUserContext = { username: string; setUsername: (username: string) => void };

export const UserContext = createContext<TUserContext>({
  username: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUsername: () => {},
});

export const UserContextProvider = UserContext.Provider;
