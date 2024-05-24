import "./MyCalendars.scss";

import { getCalendars, deleteCalendar } from "../../services/Calendar";
import { useAuth } from "../../contexts/AuthContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentCalendarID } from "../../state/date/dataSlice";

import Checkbox from "../Checkbox/Checkbox";
import CreateEditCalendar from "../createEditCalendar/createEditCalendar";
import Modal from "../Modal/Modal";

export default function MyCalendars() {
    const currentCalendar = useSelector(
        (state: any) => state.data.currentCalendarID
    );
    const dispatch = useDispatch();

    const queryClient = useQueryClient();
    const currentUser = useAuth().currentUser;

    const [isEditCalendarModalOpen, setIsEditCalendarModalOpen] =
        useState(false);
    const [editCalendarID, setEditCalendarID] = useState("");

    function deleteCalendarHandler(calendarID: string) {
        deleteCalendarMutation.mutate(calendarID);
    }

    function editCalendarHandler(calendarID: string) {
        setEditCalendarID(calendarID);
        setIsEditCalendarModalOpen(true);
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
            if (data.length > 0 && !currentCalendar) {
                const firstCalendarID = (data[0] as any).id;
                dispatch(setCurrentCalendarID({ calendarID: firstCalendarID }));
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
                            checkedValue={currentCalendar == calendar.id}
                            onChange={() =>
                                dispatch(
                                    setCurrentCalendarID({
                                        calendarID: calendar.id,
                                    })
                                )
                            }
                        />
                        <div className="calendar__tools">
                            <button
                                className="calendar__tools__remove-item"
                                onClick={() =>
                                    deleteCalendarHandler(calendar.id)
                                }
                            >
                                <img src="/components/MyCalendars/bin.png" />
                            </button>
                            <button
                                className="calendar__tools__edit-item"
                                onClick={() => editCalendarHandler(calendar.id)}
                            >
                                <img src="/components/MyCalendars/edit.png" />
                            </button>
                        </div>
                        <div className="modal">
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
                                        />
                                    </Modal>
                                )}
                        </div>
                    </div>
                ))}
        </div>
    );
}
