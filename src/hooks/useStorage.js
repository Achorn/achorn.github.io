import { useState } from "react";

const useStorage = () => {
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  return {
    error,
    url,
  };
};

export default useStorage;
