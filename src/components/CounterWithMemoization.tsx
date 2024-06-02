//useMemo hook demo
"use client";

import { useMemo, useState } from "react";

export default function CounterWithMemoization() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState<string>("");
  const sum = useMemo(() => {
    console.log("memo called");
    return (parseInt(input) * (parseInt(input) + 1)) / 2;
  }, [input]);

  //other approach
  /* 
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    for(int i=0; i<=parseInt(input); i++){
      counter += i;
    }
    setCounter(counter);
  },[inputValue])
  */

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <input
        style={{ border: "2px solid black" }}
        value={input}
        onChange={(event) => {
          const { value } = event.target;
          setInput(value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{ border: "2px solid black", background: "#EEE" }}
      >
        Counter {count} {/* counter for other approach write the counter variable here*/}
      </button>
      <div>Sum is {sum}</div>
    </div>
  );
}
