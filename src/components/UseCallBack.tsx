"use client";

import { memo, useCallback, useState } from "react";

export default function UseCallBack() {
  const [count, setCount] = useState<number>(0);

  const onClick = useCallback(() => {
    console.log("onclick fn. called");
  }, []); //won't re-define the function until something in the dependency array changes

  return (
    <div
      style={{
        border: "2px solid white",
        padding: 10,
        display: "flex",
        gap: 5,
      }}
    >
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
    </div>
  );
}

const Child = memo(({ onClick }: { onClick: () => void }) => {
  console.log("child render");
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

Child.displayName = "Child";
