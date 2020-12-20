import React,{useState} from 'react';

const Counter = () => {

    const [count,setCount] = useState(0);
    return (
        <React.Fragment>
            <p> The count is : {count}</p>
            <button  onClick= {() => setCount(count + 1) }> Increment</button>
            <button onClick={() => setCount(count + 1)}> Decrement</button>
            <button onClick={() => setCount(count * 5) }> Multiply</button>
        </React.Fragment>
    );

};

export default Counter;