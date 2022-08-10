import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return [data, /* error,*/ loading];
}
