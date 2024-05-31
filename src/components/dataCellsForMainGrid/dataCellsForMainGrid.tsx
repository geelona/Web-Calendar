import "./dataCellsForMainGrid.scss";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { current } from "@reduxjs/toolkit";

export default function DataCellsForMainGrid() {
    const { currentUser } = useAuth();

    const daysAmount = useSelector((state: any) => state.data.daysAmount);

    const choosenDay = useSelector((state: any) => state.date.choosenDay);
    const choosenMonth = useSelector((state: any) => state.date.choosenMonth);
    const choosenYear = useSelector((state: any) => state.date.choosenYear);

    const [currentWeekDates, setCurrentWeekDates] = useState<
        [number, number, number, string][]
    >([]);

    useEffect(() => {
        const calculateCurrentWeek = (
            day: number,
            month: number,
            year: number
        ): [number, number, number, string][] => {
            if (daysAmount === 1) {
                return [[day, month, year, "12:00 am"]];
            } else {
                const date = new Date(year, month, day);
                const dayOfWeek = date.getDay();

                const startOfWeek = new Date(date);
                startOfWeek.setDate(date.getDate() - dayOfWeek);

                const weekDates: [number, number, number, string][] = [];
                for (let i = 0; i < 7; i++) {
                    const currentDate = new Date(startOfWeek);
                    currentDate.setDate(startOfWeek.getDate() + i);
                    weekDates.push([
                        currentDate.getDate(),
                        currentDate.getMonth() + 1,
                        currentDate.getFullYear(),
                        "12:00 am",
                    ]);
                }

                return weekDates;
            }
        };

        const weekDates = calculateCurrentWeek(
            choosenDay,
            choosenMonth,
            choosenYear
        );
        setCurrentWeekDates(weekDates);
    }, [choosenDay, choosenMonth, choosenYear, daysAmount]);

    const rowsAmount = 24;
    const columnsAmount = 7;

    function addHourToTime(time: string): string {
        let [timePart, period] = time.split(" ");
        let [hours, minutes] = timePart.split(":").map(Number);

        hours += 1;

        if (hours === 12) {
            period = period === "am" ? "pm" : "am";
        } else if (hours > 12) {
            hours -= 12;
        }

        const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
        return formattedTime;
    }

    function renderDataCells7DaysCase() {
        const cells = [];
        for (let i = 0; i < rowsAmount; i++) {
            for (let j = 0; j < columnsAmount; j++) {
                cells.push(
                    <div
                        key={`${i}-${j}`}
                        className="main-grid__data__cells__cell"
                    >
                        <div className="main-grid__data__cells__cell__event">
                            {currentWeekDates[j] &&
                                currentWeekDates[j][3] +
                                    " " +
                                    currentWeekDates[j][0]}
                        </div>
                    </div>
                );
            }
            currentWeekDates.forEach((date) => {
                date[3] = addHourToTime(date[3]);
            });
        }
        return cells;
    }

    function renderDataCells1DayCase() {
        const cells = [];
        for (let i = 0; i < rowsAmount; i++) {
            cells.push(
                <div key={`${i}`} className="main-grid__data__cells__cell">
                    <div className="main-grid__data__cells__cell__event">
                        {currentWeekDates[0] &&
                            currentWeekDates[0][3] +
                                " " +
                                currentWeekDates[0][0]}
                    </div>
                </div>
            );
            currentWeekDates[0][3] = addHourToTime(currentWeekDates[0][3]);
        }
        return cells;
    }

    return (
        <div
            className={
                "main-grid__data__cells " +
                "main-grid__data__cells-" +
                daysAmount
            }
        >
            {daysAmount === 7
                ? renderDataCells7DaysCase()
                : renderDataCells1DayCase()}
        </div>
    );
}
