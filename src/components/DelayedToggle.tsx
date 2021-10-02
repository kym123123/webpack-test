import React, { useCallback, useState } from 'react';

const DelayedToggle = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = useCallback(() => {
    console.log(toggle);
    setTimeout(() => setToggle(toggle => !toggle), 1000);
  }, []);

  return <div></div>;
};

export default DelayedToggle;
