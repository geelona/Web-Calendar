import "./eventInfo.scss";

import { useSelector, useDispatch } from "react-redux";

import { setInfoState } from "../../../state/selectedEvent/selectedEventSlice";

import Modal from "../../common/Modal/Modal";

import EventInfoChildren from "../eventInfoChildren/eventInfoChildren";

export default function EventInfo() {
    const dispatch = useDispatch();

    const calendarData = useSelector(
        (state: any) => state.selectedEvent.calendarData
    );
    const event = useSelector((state: any) => state.selectedEvent.currentEvent);
    return (
        <Modal
            title="Event information"
            children={
                <EventInfoChildren
                    event={event}
                    calendarData={calendarData}
                    onClose={() => {
                        dispatch(setInfoState(false));
                    }}
                />
            }
            onClose={() => {
                dispatch(setInfoState(false));
            }}
            className="event-info-container"
        />
    );
}
