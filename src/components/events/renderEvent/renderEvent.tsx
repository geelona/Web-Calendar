import "./renderEvent.scss";

import React from "react";

import { useDispatch } from "react-redux";

import { convertTo24Hour } from "../../../utils/convertTo24Hour";

import { getTimeDifferenceInMinutes } from "../../../utils/getTimeDifferenceInMinutes";

import {
    setInfoState,
    setCurrentEvent,
    setCalendarData,
} from "../../../state/selectedEvent/selectedEventSlice";

export default function RenderEvent({
    event,
    calendarColor,
    calendarTitle,
    calendarId,
}: {
    event: any;
    calendarColor: string;
    calendarTitle: string;
    calendarId: string;
}) {
    const dispatch = useDispatch();

    const eventStartTime = convertTo24Hour(event.startTime);
    const eventEndTime = convertTo24Hour(event.endTime);
    const timeDifferenceInMinutes = getTimeDifferenceInMinutes(
        eventStartTime,
        eventEndTime
    );
    const cellHeightInVw = 4;
    const gapHeightInVw = 0.1;
    const minHeightInVw = 2;

    let totalHeightInVw;
    if (timeDifferenceInMinutes <= 0) {
        totalHeightInVw = minHeightInVw;
    } else {
        totalHeightInVw =
            (timeDifferenceInMinutes / 60) * (cellHeightInVw + gapHeightInVw);
    }

    function openInfo() {
        dispatch(setInfoState(true));
        dispatch(setCurrentEvent(event));
        dispatch(setCalendarData([calendarColor, calendarTitle, calendarId]));
    }

    return (
        <>
            <div
                key={crypto.randomUUID()}
                className="cell__event-container"
                style={
                    {
                        "--event-start-time-offset":
                            eventStartTime.minutes == 30 ? "50%" : "0%",
                        "--calendar-color": calendarColor,
                        "--event-height": `${totalHeightInVw}vw`,
                    } as React.CSSProperties
                }
            >
                <button
                    className="cell__event-container__time-data"
                    onClick={openInfo}
                >
                    <h1>{event.title}</h1>
                    <p>
                        {event.startTime} - {event.endTime}
                    </p>
                </button>
            </div>
        </>
    );
}
