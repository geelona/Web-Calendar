import "./Datepicker.scss";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    previousMonth,
    nextMonth,
    updateChoosenDate,
} from "../../../state/date/dateSlice";

import { getMonthNameByNum } from "../../../utils/GetMonthNameByNum";

function Datepicker({}) {
    const dispatch = useDispatch();
    const daysRef = useRef<HTMLDivElement>(null);

    const currentDay = useSelector((state: any) => state.date.currentDay);
    const currentMonth = useSelector((state: any) => state.date.currentMonth);
    const currentYear = useSelector((state: any) => state.date.currentYear);

    const choosenDay = useSelector((state: any) => state.date.choosenDay);
    const choosenMonth = useSelector((state: any) => state.date.choosenMonth);
    const choosenYear = useSelector((state: any) => state.date.choosenYear);

    const start = new Date(currentYear, currentMonth, 1).getDay();
    const endDate = new Date(currentYear, currentMonth + 1, 0).getDate();

    const end = new Date(currentYear, currentMonth, endDate).getDay();
    const endDatePrev = new Date(currentYear, currentMonth, 0).getDate();

    function clickDayHandler(e: any) {
        if (
            e.target == daysRef.current ||
            e.target.classList.contains("innactive")
        )
            return;

        let prevDay = daysRef.current?.querySelector(".active");
        if (prevDay) prevDay.classList.remove("active");

        let day = e.target;
        day.classList.add("active");
        const tempActiveDay = [day.textContent, currentMonth, currentYear];
        dispatch(updateChoosenDate(tempActiveDay));
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
                currentDay == i &&
                currentMonth === new Date().getMonth() &&
                currentYear === new Date().getFullYear()
            ) {
                daysRef.current?.insertAdjacentHTML(
                    "beforeend",
                    `<div class="today">${i}</div>`
                );
            } else if (
                i == choosenDay &&
                choosenMonth == currentMonth &&
                choosenYear == currentYear
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
    }, [currentMonth]);

    return (
        <div className="datepicker-container">
            <header>
                <div className="currentDateTitle">
                    {getMonthNameByNum(currentMonth)} {currentYear}
                </div>
                <nav>
                    <div
                        className="prev"
                        onClick={() => {
                            dispatch(previousMonth());
                        }}
                    ></div>
                    <div
                        className="next"
                        onClick={() => {
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
