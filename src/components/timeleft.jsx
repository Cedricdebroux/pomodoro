import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({
    handleStartStopClick,
    startStopButtonLabel,
    timeLeft,
    timeLabel,
}) => {
    //session or break

    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});
    return (
        <div>
            <p id={"timer-label"}>{timeLabel}</p>
            <p id={"time-left"}>{formattedTimeLeft}</p>
            {formattedTimeLeft}
            <button type={"button"} onClick={handleStartStopClick}>
                {startStopButtonLabel}
            </button>
        </div>
    );
};
export default TimeLeft;
