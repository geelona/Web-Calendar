import "./dataCellsForMainGrid.scss";
import { useSelector } from "react-redux";

export default function DataCellsForMainGrid() {
    const daysAmount = useSelector((state: any) => state.data.daysAmount);

    const rowsAmount = 24;
    const columnsAmount = 7;

    function renderDataCells7DaysCase() {
        const cells = [];
        for (let i = 0; i < rowsAmount; i++) {
            for (let j = 0; j < columnsAmount; j++) {
                cells.push(
                    <div
                        key={`${i}-${j}`}
                        className="main-grid__data__cells__cell"
                    ></div>
                );
            }
        }
        return cells;
    }

    function renderDataCells1DayCase() {
        const cells = [];
        for (let i = 0; i < rowsAmount; i++) {
            cells.push(
                <div
                    key={`${i}`}
                    className="main-grid__data__cells__cell"
                ></div>
            );
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
