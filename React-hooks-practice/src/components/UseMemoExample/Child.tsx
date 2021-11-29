import { useEffect } from "react";

let renderCount = 0;
const Child = () => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <>
      <p>Render Count: {renderCount}</p>
    </>
  );
};

export default Child;
