import { useState, useEffect } from "react";

const useOnScreen = (options: IntersectionObserverInit, ref: React.RefObject<Element>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref?.current) return; // Ensure the ref exists

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting); // Set visibility based on intersection
    }, options);

    observer.observe(ref.current); // Start observing the ref

    return () => {
      observer.disconnect(); // Clean up when the component unmounts
    };
  }, [ref, options]);

  return isVisible; // Return visibility state
};

export default useOnScreen;
