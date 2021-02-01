import React, {useState} from "react";
import Break from "./components/break";
import "./app.css";
import Session from "./components/session";
import TimeLeft from "./components/timeleft";

function App() {
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const [breakLength, setBreakLength] = useState(300);
    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60;
        if (newBreakLength < 0) {
            setBreakLength(0);
        } else {
            setBreakLength(newBreakLength);
        }
    };
    const incrementBreakLengthByOneMinute = () => {
        setBreakLength(breakLength + 60);
    };
    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength - 60;
        if (newSessionLength < 0) {
            setSessionLength(0);
        } else {
            setSessionLength(newSessionLength);
        }
    };
    const incrementSessionLengthByOneMinute = () => {
        setSessionLength(sessionLength + 60);
    };
    return (
        <div className={"App"}>
            <Break
                breakLength={breakLength}
                decrementBreakLengthByOneMinute={
                    decrementBreakLengthByOneMinute
                }
                incrementBreakLengthByOneMinute={
                    incrementBreakLengthByOneMinute
                }
            />
            <TimeLeft sessionLength={sessionLength} />
            <Session
                sessionLength={sessionLength}
                decrementSessionLengthByOneMinute={
                    decrementSessionLengthByOneMinute
                }
                incrementSessionLengthByOneMinute={
                    incrementSessionLengthByOneMinute
                }
            />
        </div>
    );
}

export default App;
