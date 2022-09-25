import useAxios from 'axios-hooks';
import { useContext } from 'react';
import { UserContext } from "../contexts/user";
import { useEffect } from 'react';
import useUser from './useUser';

export default function useAuthAxios(url: string, method: string) {
  const userContext = useUser();

  const axios = useAxios({
    url,
    method,
    headers: {
      Authorization: `Bearer ${userContext?.user?.accessToken || ''}`
    }
  }, { manual: true });

  const [{ error }] = axios;

  useEffect(() => {
    if (error) {
      userContext.setUser(null);
    }
  }, [error, userContext]);

  return axios;
}
