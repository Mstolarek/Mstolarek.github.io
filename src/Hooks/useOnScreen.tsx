import { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    {
      threshold: [0.25, 0.5, 0.75],
    }
  );

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    });
  });

  return isOnScreen;
};
