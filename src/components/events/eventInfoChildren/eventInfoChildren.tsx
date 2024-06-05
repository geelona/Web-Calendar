import "./eventInfoChildren.scss";

import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";

import { deleteEvent } from "../../../services/Event";

import Modal from "../../common/Modal/Modal";
import DeleteMenu from "../deleteMenu/deleteMenu";
import CreateEditEvent from "../createEditEvent/createEditEvent";

import { getMonthNameByNum } from "../../../utils/GetMonthNameByNum";
import { getWeekNameByNum } from "../../../utils/GetWeekNameByNum";

function calendarNode(calendarData: any) {
    return (
        <div className="calendar__calendar">
            <div
                className="calendar__calendar__color"
                style={{ background: calendarData[0] }}
            ></div>
            <p>{calendarData[1]}</p>
        </div>
    );
}

export default function EventInfoChildren({
    event,
    calendarData,
    onClose,
}: {
    event: any;
    calendarData: any;
    onClose: () => void;
}) {
    const currentUser = useAuth().currentUser;
    const queryClient = useQueryClient();
    const eventDate = new Date(event.date[2], event.date[1], event.date[0]);

    const [isTryingToDelete, setIsTryingToDelete] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const month = getMonthNameByNum(eventDate.getMonth());
    const day = getWeekNameByNum(eventDate.getDay());
    const dayNum = eventDate.getDate();

    const deleteEventMutation = useMutation(
        (eventId: string) =>
            deleteEvent({
                userId: currentUser.uid,
                calendar: event.calendar,
                eventId,
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("calendars");
            },
        }
    );

    const handleDelete = () => {
        setIsTryingToDelete(true);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <>
            <div className="event-info-container__children">
                <div className="buttons">
                    <button onClick={handleEdit}>
                        <img src="/components/eventInfo/edit.png" />
                    </button>
                    <button onClick={handleDelete}>
                        <img src="/components/eventInfo/delete.png" />
                    </button>
                </div>
                <div className="title">
                    <img src="/components/createEditEvent/title.png" />
                    <p>{event.title}</p>
                </div>
                <div className="date">
                    <img src="/components/createEditEvent/time.png" />
                    <p>
                        {day}, {month} {dayNum}, {event.startTime} -{" "}
                        {event.endTime}
                    </p>
                </div>
                <div className="when-to-send">
                    {event.isAllDay ? "All day" : "Once"}, {event.repeat}
                </div>
                <div className="calendar">
                    <img src="/components/createEditEvent/calendar.png" />
                    {calendarNode(calendarData)}
                </div>
                <div className="description">
                    <img src="/components/createEditEvent/description.png" />
                    <p>{event.description}</p>
                </div>
            </div>
            {isTryingToDelete && (
                <Modal
                    title="Delete event"
                    children={
                        <DeleteMenu
                            eventTitle={event.title}
                            onClose={() => {
                                setIsTryingToDelete(false);
                            }}
                            onDelete={() => {
                                onClose();
                                deleteEventMutation.mutate(event.id);
                            }}
                        />
                    }
                    onClose={() => setIsTryingToDelete(false)}
                    className="delete-event-modal"
                />
            )}
            {isEditing && (
                <Modal
                    title="Edit event"
                    children={
                        <CreateEditEvent
                            close={() => {
                                setIsEditing(false);
                                onClose();
                            }}
                            isEditMode={true}
                            event={event}
                        />
                    }
                    onClose={() => setIsEditing(false)}
                    className="edit-event-modal"
                />
            )}
        </>
    );
}
