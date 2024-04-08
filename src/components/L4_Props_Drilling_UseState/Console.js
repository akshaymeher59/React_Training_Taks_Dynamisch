import React from 'react'

function Console() {
    return (
        <div style={style.flex}>
            {
                consoleMethods.map((method) => {
                    return (
                        <div style={style.inner} key={Math.random()}>
                            <h1>
                                {`console: ${method.name}`}
                            </h1>
                            <h4>
                                {`Description: ${method.description}`}
                            </h4>
                            <h3>
                                {`Example: ${method.example}`}
                            </h3>
                            <button onClick={() => console.log('Hello, world!')}>{method.example}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Console;

const consoleMethods = [
    {
        name: 'log',
        description: 'Prints a message to the console.',
        example: `console.log('Hello, world!');`
    },
    {
        name: 'error',
        description: 'Prints an error message to the console.',
        example: `console.error('This is an error message.');`
    },
    {
        name: 'warn',
        description: 'Prints a warning message to the console.',
        example: `console.warn('This is a warning message.');`
    },
    {
        name: 'info',
        description: 'Prints an informational message to the console.',
        example: `console.info('This is an informational message.');`
    },
    {
        name: 'clear',
        description: 'Clears the console.',
        example: `console.clear();`
    },
    {
        name: 'assert',
        description: 'Writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.',
        example: `console.assert(2 + 2 === 5, 'Error: 2 + 2 is not equal to 5');`
    },
    {
        name: 'table',
        description: 'Displays tabular data as a table.',
        example: `console.table([{name: 'John', age: 30}, {name: 'Jane', age: 25}]);`
    },
    {
        name: 'group',
        description: 'Creates a new inline group in the console. This indents all following output by an additional level until console.groupEnd() is called.',
        example: `
        console.group('Group');
        console.log('Hello');
        console.log('World');
        console.groupEnd();
      `
    },
    {
        name: 'count',
        description: 'Logs the number of times that this particular call to count() has been called.',
        example: `
        console.count('foo');
        console.count('foo');
        console.count('bar');
      `
    }
];


const style = {
    img: { height: "200px", borderRadius: '20px', },
    flex: { display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap", justfyContent: "center" },
    inner: { margin: "10px", padding: "10px", border: "solid black 2px", backgroundColor: "#FFC700", width: "300px", height: "700px", borderRadius: '20px' }
}