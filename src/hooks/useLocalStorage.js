import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [apart, setApart] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(apart));
  }, [key, apart]);

  return [apart, setApart];
}
