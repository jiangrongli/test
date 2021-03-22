import React, { Component, useState, useEffect } from "react";

function Example(props) {
    // 声明一个新的叫做 “count” 的 state 变量
    let [count, setCount] = useState(0);

    useEffect(() => {
        // effect;
        // document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
// class lifeCycleAndHook extends Component {
//     render() {
//         return (
//             <div>
//                 <Example></Example>
//             </div>
//         );
//     }
// }

export default Example;

// export default lifeCycleAndHook;
