import React, { useEffect } from 'react';

const Logger = (WrappedComponent) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const LoggerComponent = (props) => {
    useEffect(() => {
      console.log(`${displayName} mounted`);
      return () => {
        console.log(`${displayName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return LoggerComponent;
};

export default Logger;