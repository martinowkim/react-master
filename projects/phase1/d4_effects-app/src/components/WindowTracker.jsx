import { useState, useEffect } from "react";

function WindowTracker() {

  const [size, setSize] = useState(() => window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="card">
      <p>Current Window Size: {size}</p>
    </div>
  )
}

export default WindowTracker;