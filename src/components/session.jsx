import moment from "moment";
import React from "react";

const Session = ({
    sessionLength,
    decrementSessionLengthByOneMinute,
    incrementSessionLengthByOneMinute,
}) => {
    const sessionLengthInMinutes = moment
        .duration(sessionLength, "s")
        .minutes();
    return (
        <div className={"flex flex-col items-center"}>
            <p className={"text-gray-400"} id={"session-label"}>{`Session`}</p>
            <p className={"text-purple-500 text-5xl"} id={"session-length"}>
                {sessionLengthInMinutes}
            </p>
            <button
                className={
                    "mt-2 text-lg text-gray-800 px-4 py-1 bg-yellow-500 rounded"
                }
                type={"button"}
                id={"session-decrement"}
                onClick={decrementSessionLengthByOneMinute}>
                {`-`}
            </button>
            <button
                className={
                    "mt-2 text-lg text-gray-800 px-4 py-1 bg-yellow-500 rounded"
                }
                type={"button"}
                id={"session-increment"}
                onClick={incrementSessionLengthByOneMinute}>
                {`+`}
            </button>
        </div>
    );
};

export default Session;
