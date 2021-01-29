import React, {useState} from "react";
function useDecrement(initial, step) {
    const [count, setCount] = useState(initial);
    const decrement = () => {
        setCount(c => c - step);
    };
    return [count, decrement];
}
function DownCount() {
    const [decrement] = useDecrement(1);
    return (
        <>
            <button onClick={decrement} type={"button"}>
                {`down`}
            </button>
        </>
    );
}
export {DownCount};
