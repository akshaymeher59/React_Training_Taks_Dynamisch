import React from 'react'
import ChildComponent from './ChildComponent';
function ParentComponent() {
    return (
        <div>
            <h1>ParentComponent</h1>
            <ChildComponent title="Child Title">
                <p>Child Element 1</p>
                <p>Child Element 2</p>

            </ChildComponent>
        </div>
    );
}

export default ParentComponent;
