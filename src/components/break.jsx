import moment from "moment";
import React from "react";

const Break = ({
    breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute,
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
    return (
        <div>
            <p id={"break-label"}>{`Break`}</p>
            <p id={"break-length"}>{breakLengthInMinutes}</p>
            <button
                type={"button"}
                id={"break-decrement"}
                onClick={decrementBreakLengthByOneMinute}>
                {`-`}
            </button>
            <button
                type={"button"}
                id={"break-increment"}
                onClick={incrementBreakLengthByOneMinute}>
                {`+`}
            </button>
        </div>
    );
};

export default Break;
