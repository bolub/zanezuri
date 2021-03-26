import React from "react";

export function useWindowSize() {
  const [width, setWidth] = React.useState(undefined);
  const [height, setHeight] = React.useState(undefined);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };

      handleResize();

      // const handleResize = (e) => {
      //   setWidth(window.innerWidth);
      //   setHeight(window.innerHeight);
      // };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return { width, height };
}
