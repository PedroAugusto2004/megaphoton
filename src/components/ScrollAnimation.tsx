import React from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  animationClass?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  return <>{children}</>;
};

export default ScrollAnimation;