import { useState } from "react"


export default function Counter() {

  // State Variable
  const [count, setCount] = useState(11);

  return (
    <>
      {/* React Fragment */}
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}
