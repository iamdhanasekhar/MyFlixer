import { useEffect, useState } from "react";
export default function useLocalStorageState(initialState, key) {
  // a way to usestate intialise a call back function when we have computation to do
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
