import React, { useState } from 'react'

function ConditionalCounter() {
    const [count, setCount] = useState(0);

    function handleDec() {
        if (count === 0) {
            setCount(10);
        } else {
            setCount(count - 1);
        }
    }
    function handleInc() {
        if (count === 10) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleDec}>Decrement</button>
                <span style={{ margin: '20px', padding: "5px", fontWeight: "900", fontSize: "50px" }}> {count} </span>
                <button onClick={handleInc}>Increment</button>
            </div>
        </div>
    )
}

export default ConditionalCounter