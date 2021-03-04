import About from "./About";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => setNumber(number + 1)}
      >
        Increment
      </button>
      <p>{number}</p>
      <div class="container-sm">100% wide until small breakpoint</div>
      <div class="container-md">100% wide until medium breakpoint</div>
      <div class="container-lg">100% wide until large breakpoint</div>
      <div class="container-xl">100% wide until extra large breakpoint</div>
      <div class="container-xxl">
        100% wide until extra extra large breakpoint
      </div>
    </>
  );
}
