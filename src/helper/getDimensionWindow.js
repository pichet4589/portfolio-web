import { useEffect, useState } from "react";

export function useWindowDimensionsWidth() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(0);

  //👇
  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(window.innerWidth);
    }

    if (isWindowClient) {
      setSize();
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //un-register the listener
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);
  //☝️

  return windowSize;
}

export function useWindowDimensionsHeight() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(0);

  //👇
  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(window.innerHeight);
    }

    if (isWindowClient) {
      setSize();
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //un-register the listener
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);
  //☝️

  return windowSize;
}
