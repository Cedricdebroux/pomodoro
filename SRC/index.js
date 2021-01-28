import React, {useState} from "react";
import {render} from "react-dom";
import "./style.css";

function useIncrement(initial, step) {
    const [count, setCount] = useState(initial);
    const increment = () => {
        setCount(c => c + step);
    };
    return [count, increment];
}
function Compteur() {
    const [count, increment] = useIncrement(0, 1);
    return (
        <>
            {count}
            <button onClick={increment} type={"button"}>
                {`UP`}
            </button>
        </>
    );
}
render(
    <div>
        <Compteur />
    </div>,
    document.querySelector(`#app`),
);
/*class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {"Hello"} {this.props.name}
                </h1>
            </div>
        );
    }
}

const mountNode = document.querySelector("#app");
ReactDOM.render(<HelloMessage name={"Cedric"} />, mountNode);*/
