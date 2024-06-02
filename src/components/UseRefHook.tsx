"use client";

import { useEffect, useRef } from "react";

export default function UseRef() {
  const divRef = useRef<HTMLDivElement|null>(null);
  useEffect(() => {
    setTimeout(() => {
      if (divRef.current) {
        divRef.current.innerHTML = "<p>Hello World</p>";
      }
    }, 5000);
  }, []);
  return <div ref={divRef}></div>;
}
