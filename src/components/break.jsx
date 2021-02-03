import moment from "moment";
import React from "react";

const Break = ({
    breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute,
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
    return (
        <div className={"flex flex-col items-center"}>
            <p className={"text-gray-400"} id={"break-label"}>{`Break`}</p>
            <p className={"text-purple-500 text-5xl"} id={"break-length"}>
                {breakLengthInMinutes}
            </p>
            <button
                className={
                    "mt-2 text-lg text-gray-800 px-4 py-1 bg-blue-400 rounded"
                }
                type={"button"}
                id={"break-decrement"}
                onClick={decrementBreakLengthByOneMinute}>
                {`-`}
            </button>
            <button
                className={
                    "mt-2 text-lg text-gray-800 px-4 py-1 bg-blue-400 rounded"
                }
                type={"button"}
                id={"break-increment"}
                onClick={incrementBreakLengthByOneMinute}>
                {`+`}
            </button>
        </div>
    );
};

export default Break;
