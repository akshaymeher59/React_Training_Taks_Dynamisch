import React from 'react'
import ChildComp4 from './ChildComp4'

function ChildComp3({ changeMsg }) {
    return (
        <div style={{
            padding: "10px 10px",
            margin: "auto",
            borderRadius: "20px",
            border: "2px solid black",
            backgroundColor: "#A34343",
            width: "20vw"

        }}>
            <h4>ChildComp3</h4>
            <ChildComp4 changeMsg={changeMsg} />
        </div>

    )
}

export default ChildComp3