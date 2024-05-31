import "./SpecificDatePicker.scss";

import { useState, useRef, useEffect } from "react";

import { getMonthNameByNum } from "../../../utils/GetMonthNameByNum";
import { getWeekNameByNum } from "../../../utils/GetWeekNameByNum";

import DatePicker from "../../common/Datepicker/Datepicker";

export default function SpecificDatePicker({
    setDate,
}: {
    setDate: (value: number[]) => void;
}) {
    const imageRef = useRef<HTMLImageElement>(null);

    const [opened, setOpened] = useState(false);
    const [dateExtra, setDateExtra] = useState([] as number[]);

    function openMenuHandler() {
        setOpened(!opened);
    }

    function titleGenerator() {
        if (dateExtra.length === 0) {
            return "Choose date";
        } else {
            const day = new Date(
                dateExtra[2],
                dateExtra[1],
                dateExtra[0]
            ).getDay();

            return `${getWeekNameByNum(day)}, ${dateExtra[0]} ${getMonthNameByNum(dateExtra[1])} ${dateExtra[2]}`;
        }
    }

    useEffect(() => {
        setDate(dateExtra);
        setOpened(false);
    }, [dateExtra]);

    return (
        <div className="specific-date-picker-container">
            <label htmlFor="openMenuButton">Date</label>
            <button id="openMenuButton" onClick={openMenuHandler}>
                {titleGenerator()}
            </button>
            <img
                className={opened ? "arrow-rotated" : ""}
                ref={imageRef}
                src="/components/createEventData/arrow.png"
            />
            <div className="datepicker-modal">
                {opened && (
                    <DatePicker
                        realTimeCalendar={false}
                        setValue={setDateExtra}
                    />
                )}
            </div>
        </div>
    );
}
