import { useCallback, useState } from 'react';

/**
 * Custom hook for smooth scrolling to sections
 * @returns {Function} scrollToSection - Function to scroll to a specific section
 */
export const useScrollTo = () => {
  return useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);
};

/**
 * Custom hook for managing mobile menu state
 * @returns {Object} Object containing menu state and handlers
 */
export const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev: boolean) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu,
  };
};
