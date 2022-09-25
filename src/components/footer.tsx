import { useEffect } from "react";
import useAuthAxios from "../hooks/useAuthAxios"

export default function Footer() {
  const [{ data, error, loading }, execute] = useAuthAxios('http://localhost:3000/profile', 'get');

  const fetch = () => {
    execute();
  }

  useEffect(() => {
    console.log(data, error, loading);
  }, [data, error, loading])

  return (
    <div>
      <button onClick={fetch}>Logout</button>
    </div>
  )
}
