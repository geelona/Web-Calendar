import "./MyCalendars.scss";

import { getCalendars, deleteCalendar } from "../../../services/Calendar";
import { useAuth } from "../../../contexts/AuthContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    addCurrentCalendarID,
    removeCurrentCalendarID,
} from "../../../state/date/dataSlice";

import Checkbox from "../../common/Checkbox/Checkbox";
import DeleteCalendar from "../deleteCalendar/deleteCalendar";
import CreateEditCalendar from "../createEditCalendar/createEditCalendar";
import Modal from "../../common/Modal/Modal";

export default function MyCalendars() {
    const currentCalendars = useSelector(
        (state: any) => state.data.currentCalendarsID
    );

    const dispatch = useDispatch();

    const queryClient = useQueryClient();
    const currentUser = useAuth().currentUser;

    const [isEditCalendarModalOpen, setIsEditCalendarModalOpen] =
        useState(false);
    const [editCalendarID, setEditCalendarID] = useState("");

    const [isTryingToDelete, setIsTryingToDelete] = useState(false);
    const [CalendarToDelete, setCalendarToDelete] = useState("");

    function deleteCalendarHandler(calendarID: string) {
        setIsTryingToDelete(true);
        setCalendarToDelete(calendarID);
    }

    function editCalendarHandler(calendarID: string) {
        setEditCalendarID(calendarID);
        setIsEditCalendarModalOpen(true);
    }

    function onChekedChange(calendarID: string) {
        const exist = currentCalendars.some(
            (item: any) => item.calendarID === calendarID
        );

        if (currentCalendars.length > 1 && exist) {
            dispatch(
                removeCurrentCalendarID({
                    calendarID: calendarID,
                })
            );
        } else if (!exist) {
            dispatch(
                addCurrentCalendarID({
                    calendarID: calendarID,
                })
            );
        }
    }

    function closeModal() {
        setIsEditCalendarModalOpen(false);
    }

    const deleteCalendarMutation = useMutation({
        mutationFn: (calendarID: string) =>
            deleteCalendar(currentUser.uid, calendarID),
        onSuccess: () => {
            queryClient.invalidateQueries("calendars");
        },
    });

    const calendarsQuery = useQuery({
        queryKey: ["calendars"],
        queryFn: () => getCalendars(currentUser.uid),
    });

    useEffect(() => {
        if (calendarsQuery.data) {
            const data = Object.values(calendarsQuery.data);
            if (data.length > 0 && currentCalendars.length == 0) {
                const firstCalendarID = (data[0] as any).id;
                dispatch(addCurrentCalendarID({ calendarID: firstCalendarID }));
            }
        }
    }, [calendarsQuery.data]);

    if (calendarsQuery.isLoading) {
        return "Loading...";
    }
    if (calendarsQuery.isError) {
        return (
            "An error has occurred: " + (calendarsQuery.error as Error).message
        );
    }

    if (!calendarsQuery.data) {
        return "";
    }

    const data = Object.values(calendarsQuery.data);

    return (
        <div className="calendars__data">
            {data &&
                data.map((calendar: any) => (
                    <div
                        key={calendar.id}
                        id={calendar.id}
                        className="calendar"
                    >
                        <Checkbox
                            LabelOn={true}
                            Label={calendar.title}
                            uniqueKey={"calendar-" + calendar.id}
                            color={calendar.color}
                            checkedValue={currentCalendars.some((item: any) => {
                                const temp = item.calendarID === calendar.id;
                                return temp;
                            })}
                            onChange={() => onChekedChange(calendar.id)}
                        />
                        <div className="calendar__tools">
                            {calendar.id !== "default" && (
                                <button
                                    className="calendar__tools__remove-item"
                                    onClick={() =>
                                        deleteCalendarHandler(calendar.id)
                                    }
                                >
                                    <img src="/components/MyCalendars/bin.png" />
                                </button>
                            )}
                            <button
                                className="calendar__tools__edit-item"
                                onClick={() => editCalendarHandler(calendar.id)}
                            >
                                <img src="/components/MyCalendars/edit.png" />
                            </button>
                        </div>
                        <div className="modal">
                            {isTryingToDelete &&
                                CalendarToDelete == calendar.id && (
                                    <Modal
                                        title="Delete calendar"
                                        onClose={() =>
                                            setIsTryingToDelete(false)
                                        }
                                        maxWidth="sm"
                                        className="delete-calendar-modal"
                                    >
                                        <DeleteCalendar
                                            onDelete={() => {
                                                deleteCalendarMutation.mutate(
                                                    calendar.id
                                                );
                                                dispatch(
                                                    removeCurrentCalendarID({
                                                        calendarID: calendar.id,
                                                    })
                                                );
                                            }}
                                            setIsTryingToDelete={
                                                setIsTryingToDelete
                                            }
                                            calendarTitle={calendar.title}
                                        />
                                    </Modal>
                                )}
                            {isEditCalendarModalOpen &&
                                calendar.id == editCalendarID && (
                                    <Modal
                                        title="Edit calendar"
                                        onClose={closeModal}
                                        maxWidth=""
                                        className=""
                                    >
                                        <CreateEditCalendar
                                            closeModal={
                                                setIsEditCalendarModalOpen
                                            }
                                            editMode={true}
                                            calendarID={calendar.id}
                                            calendarTitle={calendar.title}
                                            calendarColor={calendar.color}
                                        />
                                    </Modal>
                                )}
                        </div>
                    </div>
                ))}
        </div>
    );
}
