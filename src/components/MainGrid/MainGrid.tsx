import "./MainGrid.scss";

import { useSelector } from "react-redux";

export default function MainGrid() {
    const currentActiveDay = useSelector(
        (state: any) => state.date.activeCalendarDay
    );

    return <div className="main-grid"></div>;
}
