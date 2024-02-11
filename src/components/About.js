import React, { lazy, Suspense } from 'react';

const About = lazy(() => import('./About'));

const LazyAbout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  );
};

export default LazyAbout;