import "./createEditEvent.scss";

import { useEffect, useState } from "react";

import { useMutation, useQueryClient } from "react-query";

import { useQuery } from "react-query";
import { useAuth } from "../../../contexts/AuthContext";

import { avalebleTime } from "../../../utils/dayTimes";
import { repeatOptions } from "../../../utils/repeatOptions";

import { getCalendars } from "../../../services/Calendar";

import { CalendarOptionsForCreateEvent } from "../calendarOptionsForCreateEvent/calendarOptionsForCreateEvent";

import { addEvent } from "../../../services/Event";

import Input from "../../common/Input/Input";
import SelectMenu from "../../common/SelectMenu/SelectMenu";
import Checkbox from "../../common/Checkbox/Checkbox";
import Textarea from "../../common/Textarea/Textarea";
import Button from "../../common/Button/Button";
import SpecificDatePicker from "../SpecificDatePicker/SpecificDatePicker";

export default function CreateEditEvent() {
    const currentUser = useAuth().currentUser;
    const queryClient = useQueryClient();

    const [calendarsData, setCalendarsData] = useState([] as any);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const [title, setTitle] = useState("");
    const [date, setDate] = useState([] as number[]);
    const [startTime, setStartTime] = useState(avalebleTime[0]);
    const [endTime, setEndTime] = useState(avalebleTime[0]);
    const [allDay, setAllDay] = useState(false);
    const [repeat, setRepeat] = useState(repeatOptions[0]);
    const [calendar, setCalendar] = useState("");
    const [description, setDescription] = useState("");

    function submitEvent() {
        addEventMutation.mutate();
    }

    const addEventMutation = useMutation({
        mutationFn: () =>
            addEvent({
                userId: currentUser.uid,
                title,
                date,
                startTime,
                endTime,
                isAllDay: allDay,
                repeat,
                calendar,
                description,
            }),
        onSuccess: () => {
            queryClient.invalidateQueries("events");
        },
    });

    useEffect(() => {
        if (title && date.length && calendar && description) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }, [title, date, calendar, description]);

    const { data } = useQuery(["calendars"], () =>
        getCalendars(currentUser.uid)
    );

    useEffect(() => {
        if (data) {
            setCalendarsData(Object.values(data));
        }
    }, [data]);

    return (
        <div className="create-edit-event-container">
            <div className="title">
                <img src="/components/createEditEvent/title.png" />
                <Input
                    FieldName="Title"
                    FieldType="text"
                    ErrorMessage="Title is required"
                    Placeholder="Enter title"
                    IsErrored={false}
                    Disabled={false}
                    value={title}
                    setValue={setTitle}
                    fullwidth={true}
                />
            </div>
            <div className="date">
                <img src="/components/createEditEvent/time.png" />
                <div className="date__date">
                    <SpecificDatePicker setDate={setDate} />
                </div>

                <div className="date__time">
                    <div className="date__time__start">
                        <SelectMenu
                            label="Time"
                            options={avalebleTime.map((time, index) => (
                                <div
                                    key={index}
                                    className="start-time-event-option"
                                >
                                    {time}
                                </div>
                            ))}
                            selectDefault={avalebleTime[0]}
                            fullWidth={true}
                            setValue={setStartTime}
                        />
                    </div>
                    <span>-</span>
                    <div className="date__time__end">
                        <SelectMenu
                            label=""
                            options={avalebleTime.map((time, index) => (
                                <div key={index}>{time}</div>
                            ))}
                            selectDefault={avalebleTime[0]}
                            fullWidth={true}
                            setValue={setEndTime}
                        />
                    </div>
                </div>
            </div>
            <div className="when-to-send">
                <div className="checkbox">
                    <Checkbox
                        LabelOn={true}
                        Label="All Day"
                        uniqueKey="allDayCheck"
                        color="#00AE1C"
                        checkedValue={allDay}
                        onChange={() => setAllDay(!allDay)}
                        fontSize="0.8vw"
                    />
                </div>
                <SelectMenu
                    label=""
                    options={repeatOptions.map((option, index) => (
                        <div key={index}>{option}</div>
                    ))}
                    selectDefault="Does not repeat"
                    setValue={setRepeat}
                    width="11vw"
                />
            </div>
            <div className="calendar">
                <img src="/components/createEditEvent/calendar.png" />
                <SelectMenu
                    label="Calendar"
                    options={CalendarOptionsForCreateEvent(calendarsData)}
                    selectDefault="Select calendar"
                    fullWidth={true}
                    setValue={setCalendar}
                    ifCalendarOptions={true}
                />
            </div>
            <div className="description">
                <img src="/components/createEditEvent/description.png" />
                <Textarea
                    Label="Description"
                    Placeholder="Enter the description to your event in here"
                    value={description}
                    setValue={setDescription}
                ></Textarea>
            </div>
            <div className="submit">
                <Button
                    label="Save"
                    color="primary"
                    withIcon={false}
                    disabled={submitDisabled}
                    onClick={submitEvent}
                    fullWidth={true}
                    fontSize={0.8}
                />
            </div>
        </div>
    );
}
