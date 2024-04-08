import React from 'react'
import ChildComp3 from './ChildComp3'

function ChildComp2({ changeMsg }) {
    return (
        <div style={{
            padding: "10px 10px",
            margin: "auto",
            borderRadius: "20px",
            border: "2px solid black",
            backgroundColor: "#AD88C6",
            width: "30vw"
        }}>
            <h2>ChildComp2</h2>
            <ChildComp3 changeMsg={changeMsg} />
        </div>
    )
}

export default ChildComp2