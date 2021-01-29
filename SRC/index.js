import React, {useState} from "react";
import {render} from "react-dom";
import "./style.css";

function useIncrement(initial, step) {
    const [count, setCount] = useState(initial);
    const increment = () => {
        if (count < 90) {
            setCount(c => c + step);
        }
    };
    const decrement = () => {
        if (count > 0) {
            setCount(c => c - step);
        }
    };
    const reset = () => {
        setCount(20);
    };
    return [count, increment, decrement, reset];
}
function Count() {
    const [count, increment, decrement, reset] = useIncrement(20, 1);
    return (
        <>
            {count}
            <button onClick={increment} type={"button"}>
                {`UP`}
            </button>
            <button onClick={decrement} type={"button"}>
                {`down`}
            </button>
            <button onClick={reset} type={"button"}>
                {`reset`}
            </button>
        </>
    );
}
render(
    <div>
        <Count />
    </div>,
    document.querySelector(`#app`),
);
