import propTypes from "prop-types";
import "./Datepicker.scss";
import { useRef, useEffect } from "react";

import { useState } from "react";

function Datepicker({}) {
    const daysRef = useRef<HTMLDivElement>(null);

    let [date, setDate] = useState(new Date());
    let [activeDay, setActiveDay] = useState<any>([]);

    let month = date.getMonth();
    let year = date.getFullYear();

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();

    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

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
        setActiveDay([day.textContent, month, year]);
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
                i === new Date().getDate() &&
                month === currentMonth &&
                year === currentYear
            ) {
                daysRef.current?.insertAdjacentHTML(
                    "beforeend",
                    `<div class="today">${i}</div>`
                );
            } else if (
                i == activeDay[0] &&
                month == activeDay[1] &&
                year == activeDay[2]
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
    }, [date]);

    return (
        <div className="datepicker-container">
            <header>
                <div className="currentDateTitle">
                    {monthNames[month]} {year}
                </div>
                <nav>
                    <div
                        className="prev"
                        onClick={() => {
                            setDate(new Date(year, month - 1, 1));
                        }}
                    ></div>
                    <div
                        className="next"
                        onClick={() => {
                            setDate(new Date(year, month + 1, 1));
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
