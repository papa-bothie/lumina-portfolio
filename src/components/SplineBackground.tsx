import { Suspense, lazy, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0 z-0">
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-background to-background">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        </div>
      )}
      
      {/* Spline 3D Scene */}
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/8BHrMwCk5m3VKtYQ/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
};

export default SplineBackground;
