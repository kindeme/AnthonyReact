import React,{useState, useEffect} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    
    useEffect(() => { },[]);
    return (
        <React.Fragment>
            <h6>Counter</h6>
            <p> current count: {count}</p>
            <button onClick={() => setCount(count  + 1) }> Increment the counter</button>
        </React.Fragment>
    );

};

export default Counter;