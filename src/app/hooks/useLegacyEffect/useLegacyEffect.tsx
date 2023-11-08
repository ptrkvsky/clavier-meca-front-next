'use client';
import { useEffect, useRef } from 'react';

const isDevelopmentRun =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
// uncomment next expression if you use Vite for building
// second condition is added to ensure we are not in the test environment
// as the @testing-library/react 'render' renders the component once
// const isDevelopmentRun = import.meta.env.DEV && import.meta.env.MODE !== 'test';

const useLegacyEffect = (callback: () => any, dependencies: any[]) => {
  const isMountedRef = useRef(!isDevelopmentRun);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return undefined;
    }

    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export default useLegacyEffect;
