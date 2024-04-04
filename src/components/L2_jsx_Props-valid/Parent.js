import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <Child
                count={count}
                increment={increment}
                decrement={decrement}
            />
        </div>
    )
}



export default Parent