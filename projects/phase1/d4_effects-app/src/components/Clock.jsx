import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id); // cleanup
  }, []);
  return (
    <div className="card">
      <h3>Clock</h3>
      <p>{now.toLocaleTimeString()}</p>
    </div>
  );
}