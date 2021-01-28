import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
class HelloMessage extends React.Component {
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
ReactDOM.render(<HelloMessage name={"Cedric"} />, mountNode);
