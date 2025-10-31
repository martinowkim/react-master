import { useState } from "react";

export default function NameEcho() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="card">
      <h3>Controlled Input</h3>
      <input
        placeholder="Type your name"
        value={name}
        onChange={handleChange}
      />
      <p>Echo: {name || "(empty)"}</p>
    </div>
  );
}
