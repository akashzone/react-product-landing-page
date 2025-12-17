import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["YOUR FEET \nDESERVE\nTHE BEST"],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return (
    <h1>
      <span ref={typedRef} style={{ color: "black" }}></span>
    </h1>
  );
}
