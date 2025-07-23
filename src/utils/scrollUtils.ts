/**
 * Creates a click handler for smooth scrolling to an element
 * @param selector - CSS selector for the target element
 * @param callback - Optional callback to execute after scrolling
 */
export const createSmoothScrollHandler = (
  selector: string,
  callback?: () => void
) => (e: React.MouseEvent<HTMLAnchorElement>): void => {
  e.preventDefault();
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  if (callback) {
    callback();
  }
};