import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <h2>ChildComponent</h2>
            <h1>{props.title}</h1>
            <div>{props.children}</div>
        </div>
    );
}

export default ChildComponent;

