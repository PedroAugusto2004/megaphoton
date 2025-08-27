import { useState, useRef, useEffect } from 'react';

interface OptimizedVideoProps {
  src: string;
  webmSrc?: string;
  poster: string;
  className?: string;
  style?: React.CSSProperties;
  onTimeUpdate?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onLoadedData?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onError?: () => void;
  isActive: boolean;
  shouldLoad: boolean;
}

const OptimizedVideo = ({
  src,
  webmSrc,
  poster,
  className,
  style,
  onTimeUpdate,
  onLoadedData,
  onError,
  isActive,
  shouldLoad
}: OptimizedVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive && isLoaded && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isActive, isLoaded]);

  const handleLoadedData = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsLoaded(true);
    onLoadedData?.(e);
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (!shouldLoad) {
    return (
      <div 
        className={className}
        style={{
          ...style,
          backgroundImage: `url(${poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    );
  }

  if (hasError) {
    return (
      <div 
        className={className}
        style={{
          ...style,
          backgroundImage: `url(${poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      poster={poster}
      autoPlay={false}
      loop
      muted
      playsInline
      preload="metadata"
      onTimeUpdate={onTimeUpdate}
      onLoadedData={handleLoadedData}
      onError={handleError}
    >
      {webmSrc && <source src={webmSrc} type="video/webm" />}
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default OptimizedVideo;