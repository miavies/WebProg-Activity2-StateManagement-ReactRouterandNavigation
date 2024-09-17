import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counterContainer">
            <h1>Counter</h1>
            <p>You clicked {count} times</p>
            <div className="buttonContainer">
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
                <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;
