import "./SideBar.scss";

import { useState } from "react";

import Button from "../Button/Button";
import Datepicker from "../Datepicker/Datepicker";
import Modal from "../Modal/Modal";
import CreateEditEvent from "../createEditEvent/createEditEvent";
import CreateEditCalendar from "../createEditCalendar/createEditCalendar";
import MyCalendars from "../MyCalendars/MyCalendars";

export default function SideBar() {
    const [createEventBoolean, setCreateEventBoolean] = useState(false);
    const [createCalendarBoolean, setCreateCalendarBoolean] = useState(false);

    function createEventHandler() {
        setCreateEventBoolean(true);
    }
    function removeCreateEventHandler() {
        setCreateEventBoolean(false);
    }

    function createCalendarHandler() {
        setCreateCalendarBoolean(true);
    }
    function removeCreateCalendarHandler() {
        setCreateCalendarBoolean(false);
    }

    return (
        <div className="sidebar">
            <Button
                label="Create"
                color="primary"
                withIcon={false}
                disabled={createCalendarBoolean || createEventBoolean}
                onClick={createEventHandler}
                fontSize={0.8}
                customIcon="/components/SideBar/add.png"
                fullWidth={true}
            />
            <Datepicker />
            <div className="calendars">
                <header>
                    <p>My calendars</p>
                    <button
                        onClick={createCalendarHandler}
                        disabled={createCalendarBoolean || createEventBoolean}
                    >
                        <img
                            style={{ filter: "invert(1)" }}
                            src="/components/SideBar/add.png"
                        />
                    </button>
                </header>
                <MyCalendars />
            </div>
            <div className="modals">
                {createEventBoolean && (
                    <Modal
                        title="Create event"
                        onClose={removeCreateEventHandler}
                        maxWidth="60vw"
                        className="create-edit-event-modal"
                    >
                        <CreateEditEvent />
                    </Modal>
                )}
                {createCalendarBoolean && (
                    <Modal
                        title="Create calendar"
                        onClose={removeCreateCalendarHandler}
                        maxWidth="60vw"
                        className="create-edit-calendar-modal"
                    >
                        <CreateEditCalendar
                            closeModal={removeCreateCalendarHandler}
                            editMode={false}
                        />
                    </Modal>
                )}
            </div>
        </div>
    );
}
