import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setSetp] = useState(1);

  const date = new Date("June 21, 2027");

  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setSetp((c) => c - 1)}>-</button>
        <span> Setp: {step} </span>
        <button onClick={() => setSetp((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
