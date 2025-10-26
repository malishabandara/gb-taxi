import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component doesn't need any props, so we can use a simple function component.
// TypeScript will infer the types for `pathname` from the `useLocation` hook.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the pathname changes

  return null; // This component doesn't render any visible UI
}