import React, { useState, useRef, useEffect } from 'react';

function Landinpagere() {
  // Define a state variable 'count' and its corresponding set function 'setCount'
  const [count, setCount] = useState(0);
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('onclick', onClick, false);
    }
  },[count]);
  const onClick = () => {
    setCount(count+1)
    console.log(count)
  }
  return (
    <div >
      <p>You clicked {count} times</p>
      {/* Define a button that updates the 'count' state when clicked */}
      <button ref={ref} >
        Click me
      </button>
    </div>
  );
}

export default Landinpagere;
