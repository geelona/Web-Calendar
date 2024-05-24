import "./createEditCalendar.scss";

import { useMutation, useQueryClient } from "react-query";

import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

import { addCalendar, editCalendar } from "../../services/Calendar";

import Input from "../Input/Input";
import ColorPicker from "../ColorPicker/ColorPicker";
import Button from "../Button/Button";

export default function CreateEditCalendar({
    closeModal,
    editMode,
    calendarID,
    calendarTitle,
}: {
    closeModal: (value: boolean) => void;
    editMode: boolean;
    calendarID: string;
    calendarTitle: string;
}) {
    const currentUser = useAuth().currentUser;
    const queryClient = useQueryClient();

    const [title, setTitle] = useState(calendarTitle);
    const [color, setColor] = useState("#000000");

    const addCalendarMutation = useMutation({
        mutationFn: () => addCalendar(currentUser.uid, title, color),
        onSuccess: () => {
            queryClient.invalidateQueries("calendars");
        },
    });

    const editCalendarMutation = useMutation({
        mutationFn: () =>
            editCalendar(currentUser.uid, calendarID, title, color),
        onSuccess: () => {
            queryClient.invalidateQueries("calendars");
        },
    });

    function saveCalendarClickHandler() {
        if (!title) {
            alert("Title is required");
            return;
        }
        if (editMode) {
            editCalendarMutation.mutate();
        } else {
            addCalendarMutation.mutate();
        }
        closeModal(false);
    }

    return (
        <div className="create-edit-calendar-container">
            <div className="title">
                <img src="/public/components/createEditCalendar/T-icon.png" />
                <Input
                    FieldName="Title"
                    FieldType="text"
                    ErrorMessage=""
                    Placeholder="Calendar title"
                    IsErrored={false}
                    Disabled={false}
                    value={title}
                    setValue={setTitle}
                />
            </div>
            <div className="color">
                <div className="color__img-container">
                    <img src="/public/components/createEditCalendar/color-icon.png" />
                </div>
                <ColorPicker changeColor={setColor} />
            </div>
            <div className="button-wrapper">
                <Button
                    label="Save"
                    color="primary"
                    withIcon={false}
                    disabled={false}
                    onClick={saveCalendarClickHandler}
                    fontSize={1}
                    fullWidth={false}
                />
            </div>
        </div>
    );
}
