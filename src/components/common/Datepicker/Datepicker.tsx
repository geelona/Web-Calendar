import "./Datepicker.scss";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    previousMonth,
    nextMonth,
    updateChoosenDate,
} from "../../../state/date/dateSlice";

import { getMonthNameByNum } from "../../../utils/GetMonthNameByNum";

function Datepicker({
    realTimeCalendar,
    setValue,
}: {
    realTimeCalendar: boolean;
    setValue?: (value: number[]) => void;
}) {
    const dispatch = useDispatch();
    const daysRef = useRef<HTMLDivElement>(null);

    const currentDay = useSelector((state: any) => state.date.currentDay);
    const currentMonth = useSelector((state: any) => state.date.currentMonth);
    const currentYear = useSelector((state: any) => state.date.currentYear);

    const [currentDayTemp, setCurrentDayTemp] = useState(currentDay);
    const [currentMonthTemp, setCurrentMonthTemp] = useState(currentMonth);
    const [currentYearTemp, setCurrentYearTemp] = useState(currentYear);

    const choosenDay = useSelector((state: any) => state.date.choosenDay);
    const choosenMonth = useSelector((state: any) => state.date.choosenMonth);
    const choosenYear = useSelector((state: any) => state.date.choosenYear);

    const start = new Date(
        realTimeCalendar ? currentYear : currentYearTemp,
        realTimeCalendar ? currentMonth : currentMonthTemp,
        1
    ).getDay();
    const endDate = new Date(
        realTimeCalendar ? currentYear : currentYearTemp,
        realTimeCalendar ? currentMonth + 1 : currentMonthTemp + 1,
        0
    ).getDate();

    const end = new Date(
        realTimeCalendar ? currentYear : currentYearTemp,
        realTimeCalendar ? currentMonth : currentMonthTemp,
        endDate
    ).getDay();
    const endDatePrev = new Date(
        realTimeCalendar ? currentYear : currentYearTemp,
        realTimeCalendar ? currentMonth : currentMonthTemp,
        0
    ).getDate();

    function notRealTimeNextMonth() {
        if (currentMonthTemp === 11) {
            setCurrentMonthTemp(0);
            setCurrentYearTemp(currentYearTemp + 1);
        } else {
            setCurrentMonthTemp(currentMonthTemp + 1);
        }
    }
    function notRealTimePreviousMonth() {
        if (currentMonthTemp === 0) {
            setCurrentMonthTemp(11);
            setCurrentYearTemp(currentYearTemp - 1);
        } else {
            setCurrentMonthTemp(currentMonthTemp - 1);
        }
    }

    function titleGenerator() {
        if (!realTimeCalendar) {
            return `${getMonthNameByNum(currentMonthTemp)} ${currentYearTemp}`;
        }
        return `${getMonthNameByNum(currentMonth)} ${currentYear}`;
    }

    function clickDayHandler(e: any) {
        if (
            e.target == daysRef.current ||
            e.target.classList.contains("innactive")
        )
            return;

        if (realTimeCalendar) {
            let prevDay = daysRef.current?.querySelector(".active");
            if (prevDay) prevDay.classList.remove("active");

            let day = e.target;
            day.classList.add("active");
            const tempActiveDay = [day.textContent, currentMonth, currentYear];
            dispatch(updateChoosenDate(tempActiveDay));
        } else {
            setCurrentDayTemp(+e.target.textContent);

            const tempActiveDay = [
                +e.target.textContent,
                currentMonthTemp,
                currentYearTemp,
            ];
            setValue && setValue(tempActiveDay);
        }
    }

    function renderDays() {
        if (daysRef.current) {
            daysRef.current.innerHTML = "";
        }

        for (let i = start; i > 0; i--) {
            daysRef.current?.insertAdjacentHTML(
                "beforeend",
                `<div class="innactive">${endDatePrev - i + 1}</div>`
            );
        }
        for (let i = 1; i <= endDate; i++) {
            if (
                (realTimeCalendar ? currentDay : currentDayTemp) == i &&
                (realTimeCalendar ? currentMonth : currentMonthTemp) ===
                    new Date().getMonth() &&
                (realTimeCalendar ? currentYear : currentYearTemp) ===
                    new Date().getFullYear()
            ) {
                daysRef.current?.insertAdjacentHTML(
                    "beforeend",
                    `<div class="today">${i}</div>`
                );
            } else if (
                i == choosenDay &&
                choosenMonth == currentMonth &&
                choosenYear == currentYear &&
                realTimeCalendar
            ) {
                daysRef.current?.insertAdjacentHTML(
                    "beforeend",
                    `<div class="active">${i}</div>`
                );
            } else {
                daysRef.current?.insertAdjacentHTML(
                    "beforeend",
                    `<div>${i}</div>`
                );
            }
        }
        for (let i = 1; i <= 6 - end; i++) {
            daysRef.current?.insertAdjacentHTML(
                "beforeend",
                `<div class="innactive">${i}</div>`
            );
        }
    }

    useEffect(() => {
        renderDays();
    }, [currentMonth, currentMonthTemp]);

    return (
        <div className="datepicker-container">
            <header>
                <div className="currentDateTitle">{titleGenerator()}</div>
                <nav>
                    <div
                        className="prev"
                        onClick={() => {
                            if (!realTimeCalendar) {
                                notRealTimePreviousMonth();
                                return;
                            }
                            dispatch(previousMonth());
                        }}
                    ></div>
                    <div
                        className="next"
                        onClick={() => {
                            if (!realTimeCalendar) {
                                notRealTimeNextMonth();
                                return;
                            }
                            dispatch(nextMonth());
                        }}
                    ></div>
                </nav>
            </header>
            <div className="wrapper">
                <div className="day-names">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                </div>
                <div
                    ref={daysRef}
                    className="days"
                    onClick={clickDayHandler}
                ></div>
            </div>
        </div>
    );
}

export default Datepicker;
