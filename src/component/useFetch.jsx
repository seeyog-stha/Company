import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [value, setValue] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  async function fetchData(url) {
    // Javascript example

    try {
      let response = await fetch(url);
      let dataa = await response.json();
      setValue(dataa);
      setPending(false);
    } catch (err) {
      setError(err.message);
      setPending(false);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return { value, error, pending };
}
