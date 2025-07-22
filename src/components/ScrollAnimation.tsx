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
      { threshold }
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
    <div ref={ref} className={`reveal ${animationClass}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default ScrollAnimation;