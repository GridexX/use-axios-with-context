import React, { createContext, useEffect, useState } from 'react'

export interface IUserContext {
  user: {
    name: string;
    age: number;
  }
  setUser: (user: any) => void;
}

export const UserContext = createContext<any>(null);

export default function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    name: 'Joe',
    age: 30,
    accessToken: '123456789',
  });

  useEffect(() => {
    if (!user) {
      console.log('User is null');
    }
  }, [user]);

  const valueContext = {user, setUser}
  return (
    <UserContext.Provider value={valueContext}>
      {children}
    </UserContext.Provider>
  );
}
