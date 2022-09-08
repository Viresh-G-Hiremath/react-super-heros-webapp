import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setIsLoading(false);
        setData(data);
      } catch (e) {
        setIsLoading(false);
        console.log(e.message);
      }
    };
    fetchApi();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading };
};
