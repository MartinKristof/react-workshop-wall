import { useEffect, useState } from 'react';

export const useInitialRender = () => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  return { initialRenderComplete };
};
