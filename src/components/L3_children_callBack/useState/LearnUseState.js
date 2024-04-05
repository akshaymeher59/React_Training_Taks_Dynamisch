import React from 'react';
import Images from './Images';
import { useState } from 'react';


function LearnUseState() {
    const [data, setData] = useState({
        fname: "Akshay",
        lname: "Meher",
        address: {
            city: "Pune",
            pincode: 443355,
            country: "India"
        }
    });
    const [count, setCount] = useState(0);
    // const [comp, setComp] = useState(<Component setCount={setCount} count={count}/>);

    return (
        <div>
            <Images data={data} setData={setData} />
            {count}
            {/* {jsx} */}
            {/* {comp} */}

        </div>
    )
}

export default LearnUseState;



/*

function Component({ count, setCount, updateComp = () => { } }) {

    return (
        <div>
            <button onClick={() => { setCount(count + 1); updateComp() }}>Inc</button>
        </div>
    )
}

*/