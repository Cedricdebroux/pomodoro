import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React, {useEffect, useState} from "react";

momentDurationFormatSetup(moment);

const TimeLeft = ({breakLenght, sessionLength}) => {
    const [currentSessionType, setCurrentSessionType] = useState("session"); //session or break
    const [intervalId, setIntervalId] = useState(null);
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const isStarted = intervalId != null;
    const handleStartStopClick = () => {
        if (isStarted) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            //stop mode decrement every second
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    const newTimeLeft = prevTimeLeft - 1;
                    if (newTimeLeft >= 0) {
                        return prevTimeLeft - 1;
                    }
                    if (currentSessionType === "session") {
                        setCurrentSessionType("break");
                        setTimeLeft(breakLenght);
                    } else if (currentSessionType === "break") {
                        setCurrentSessionType("session");
                        setTimeLeft(sessionLength);
                    }
                });
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };
    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});
    return (
        <div>
            {formattedTimeLeft}
            <button type={"button"} onClick={handleStartStopClick}>
                {isStarted ? "stop" : "start"}
            </button>
        </div>
    );
};
export default TimeLeft;
