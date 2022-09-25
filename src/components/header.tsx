import React, { useContext } from 'react'
import { IUserContext, UserContext } from '../contexts/user';

export default function Header() {
  const userContext = useContext<IUserContext>(UserContext);

  const changeName = () => {
    userContext.setUser({
      name: 'Alexis',
      age: 30,
    });
  }

  return (
    <>
      <p>Name: {userContext?.user?.name || 'No user'}</p>
      <button onClick={changeName}>Change Name</button>
    </>
  )
}
