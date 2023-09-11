import { useState, useEffect } from 'react';

function MyComponent() {
  const [screenDimensions, setScreenDimensions] = useState({
    screenWidth: 0,
    screenHeight: 0,
  });

  const handleResize = () => {
    setScreenDimensions({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      setScreenDimensions({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return screenDimensions;
}

export default MyComponent;
