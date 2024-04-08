import React from 'react'
import ChildComp2 from './ChildComp2'

function ChildComp1({ changeMsg }) {
    return (
        <div style={{
            padding: "10px 10px",
            margin: "auto",
            borderRadius: "20px",
            border: "2px solid black",
            backgroundColor: "#FCDC2A",
            width: "40vw"
        }}>
            <h2>ChildComp1</h2>
            <ChildComp2 changeMsg={changeMsg} />
        </div>
    )
}

export default ChildComp1