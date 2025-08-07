import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animationClass?: string;
  threshold?: number;
  delay?: number;
}

const ScrollAnimation = ({ 
  children, 
  animationClass = 'reveal-fade-up', 
  threshold = 0.1,
  delay = 0
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optimize for small screens
    const isSmallScreen = window.innerWidth <= 480;
    const isMediumScreen = window.innerWidth <= 768;
    
    // Adjust threshold and rootMargin based on screen size
    const optimizedThreshold = isSmallScreen ? 0.05 : isMediumScreen ? 0.08 : threshold;
    const optimizedRootMargin = isSmallScreen 
      ? '0px 0px -20px 0px'  // Much smaller margin for iPhone SE/10
      : isMediumScreen 
      ? '0px 0px -50px 0px'  // Medium margin for tablets
      : '0px 0px -100px 0px'; // Original margin for desktop

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: optimizedThreshold, rootMargin: optimizedRootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div 
      ref={ref} 
      className={animationClass.includes('reveal') ? animationClass : `reveal ${animationClass}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;