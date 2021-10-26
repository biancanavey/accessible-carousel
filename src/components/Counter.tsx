import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>{counter}</div>
      <button
        onClick={() => 
          setCounter(counter-1)
        }
        disabled={counter===0}
      >
        -
      </button>
      <button
        onClick={() => 
          setCounter(counter+1)
        }
      >
        +
      </button>
      
    </>
  );
};
