//useMemo hook demo
"use client";

import { useMemo, useState } from "react";

export default function CounterWithMemoization() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState<string>("");
  //now this logic basically memoizes sum between re-renders
  const sum = useMemo(() => {
    console.log("memo called");
    let finalSum = 0;
    for (let i = 0; i < parseInt(input); i++) {
      finalSum += i;
    }
    return finalSum;
  }, [input]);

  //other approach
  /* 
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    for(let i=0; i<=parseInt(input); i++){
      counter += i;
    }
    setCounter(counter);
  },[inputValue])
  */

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <input
        placeholder="input number"
        style={{ border: "2px solid white", color: "black" }}
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
        style={{ border: "2px solid white" }}
      >
        Counter {count}{" "}
        {/* counter for other approach write the counter variable here*/}
      </button>
      <div>Sum is {sum}</div>
    </div>
  );
}
