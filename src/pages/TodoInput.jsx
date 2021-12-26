import { useState } from "react";

export const TodoInput = ({ onAdd }) => {
  const [state, setState] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="add something"
      />
      <input
        type="submit"
        onClick={() => {
          onAdd(state);
          setState("");
        }}
      />
    </div>
  );
};
