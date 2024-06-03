"use client";
import { useRef, useState } from "react";

//persist value across renders, as change in ref doesn't trigger a re-render!
export default function UseRef2() {
  const [_, forceRender] = useState(0);
  const numberOfRenders = useRef<number>(0);
  numberOfRenders.current = numberOfRenders.current + 1; //the value is in numberOfRenders.current
  return (
    <div>
      <button
        onClick={() => {
          forceRender(Math.random());
        }}
      >
        Click Me!
      </button>
      <p>The number of renders are {numberOfRenders.current}</p>
    </div>
  );
}
