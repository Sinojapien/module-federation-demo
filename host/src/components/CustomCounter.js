import React, { useState } from "react";

const CustomCounter = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      {children}
    </div>
  );
};

export default CustomCounter;
