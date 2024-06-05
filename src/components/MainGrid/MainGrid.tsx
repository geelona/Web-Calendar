import "./MainGrid.scss";

import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { getWeekNameByNum } from "../../utils/GetWeekNameByNum";

import { setInfoState } from "../../state/selectedEvent/selectedEventSlice";

import TimeSideBarForMainGrid from "../TimeSideBarForMainGrid/TimeSideBarForMainGrid";
import DataCellsForMainGrid from "../dataCellsForMainGrid/dataCellsForMainGrid";
import EventInfo from "../events/eventInfo/eventInfo";

export default function MainGrid() {
    const dispatch = useDispatch();

    const isInfoOpen = useSelector(
        (state: any) => state.selectedEvent.isInfoOpen
    );
    const calendarData = useSelector(
        (state: any) => state.selectedEvent.calendarData
    );
    const currentCalendars = useSelector(
        (state: any) => state.data.currentCalendarsID
    );

    const currentWeekRef = useRef<HTMLDivElement>(null);
    const daysAmount = useSelector((state: any) => state.data.daysAmount);

    const choosenDay = useSelector((state: any) => state.date.choosenDay);
    const choosenMonth = useSelector((state: any) => state.date.choosenMonth);
    const choosenYear = useSelector((state: any) => state.date.choosenYear);

    const dayOfWeek = new Date(choosenYear, choosenMonth, choosenDay).getDay();

    function ifCurrentCalendarsContainCalendar() {
        return currentCalendars.some(
            (item: any) => item.calendarID === calendarData[2]
        );
    }

    function renderDay(day: Date) {
        const dayNumber = day.getDate();
        const monthNumber = day.getMonth() + 1;
        const DayName = getWeekNameByNum(day.getDay())
            .slice(0, 3)
            .toUpperCase();
        const isCurrentDay =
            dayNumber == new Date().getDate() &&
            monthNumber == new Date().getMonth() + 1;
        currentWeekRef.current?.insertAdjacentHTML(
            "beforeend",
            `<div class="active"><p class="dayNumber">${dayNumber}</p>
            <p class="weekName">${DayName}</p>
            ${isCurrentDay ? '<p class="today">Today*</p></div>' : ""}`
        );
    }

    function renderWeek() {
        const startOfWeek = new Date(
            choosenYear,
            choosenMonth,
            choosenDay - dayOfWeek
        );
        for (let i = 0; i < 7; i++) {
            const currentDay = new Date(startOfWeek);
            currentDay.setDate(startOfWeek.getDate() + i);
            const dayNumber = currentDay.getDate();
            const monthNumber = currentDay.getMonth() + 1;
            const DayName = getWeekNameByNum(currentDay.getDay())
                .slice(0, 3)
                .toUpperCase();
            const isCurrentDay =
                dayNumber == new Date().getDate() &&
                monthNumber == new Date().getMonth() + 1;
            if (dayNumber == choosenDay && monthNumber == choosenMonth + 1) {
                currentWeekRef.current?.insertAdjacentHTML(
                    "beforeend",
                    `<div class="active"><p class="dayNumber">${dayNumber}</p>
                    <p class="weekName">${DayName}</p>
                    ${isCurrentDay ? '<p class="today">Today*</p></div>' : ""}`
                );
            } else {
                currentWeekRef.current?.insertAdjacentHTML(
                    "beforeend",
                    `<div><p class="dayNumber">${dayNumber}</p><p class="weekName">${DayName}</p>
                    ${isCurrentDay ? '<p class="today">Today*</p></div>' : ""}
                    </div>`
                );
            }
        }
    }

    useEffect(() => {
        if (currentWeekRef.current) {
            currentWeekRef.current.innerHTML = "";
            if (daysAmount === 7) renderWeek();
            else renderDay(new Date(choosenYear, choosenMonth, choosenDay));
        }
    }, [choosenDay, choosenMonth, choosenYear, daysAmount]);

    useEffect(() => {
        if (isInfoOpen && !ifCurrentCalendarsContainCalendar()) {
            dispatch(setInfoState(false));
        }
    }, [isInfoOpen, currentCalendars, calendarData, dispatch]);

    return (
        <div className="main-grid">
            <header
                className={"amount-of-days-" + daysAmount}
                ref={currentWeekRef}
            ></header>
            <div className="main-grid__data">
                <TimeSideBarForMainGrid />
                <DataCellsForMainGrid />
                {isInfoOpen && ifCurrentCalendarsContainCalendar() && (
                    <EventInfo />
                )}
            </div>
        </div>
    );
}
