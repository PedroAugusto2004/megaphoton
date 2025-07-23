import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to handle smooth scrolling to sections when URL contains a hash
 */
export const useHashScroll = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that section
    if (hash) {
      // Small delay to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);
};

export default useHashScroll;