import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

export const useCounterAnimation = (end: number, duration = 1.8) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(v)
    });

    return () => controls.stop();
  }, [duration, end]);

  return Math.round(value);
};
