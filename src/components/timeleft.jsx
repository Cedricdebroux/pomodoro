import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React, {useEffect, useState} from "react";

momentDurationFormatSetup(moment);

const TimeLeft = ({sessionLength}) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const handleStartStopClick = () => {
        setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                const newTimeLeft = prevTimeLeft - 1;
                if (newTimeLeft >= 0) {
                    return prevTimeLeft - 1;
                }
                return prevTimeLeft;
            });
        }, 1000);
    };
    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});
    return (
        <div>
            {formattedTimeLeft}
            <button type={"button"} onClick={handleStartStopClick}>{`start`}</button>
        </div>
    );
};
export default TimeLeft;
