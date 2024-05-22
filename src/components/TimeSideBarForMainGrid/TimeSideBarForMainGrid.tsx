import "./TimeSideBarForMainGrid.scss";

export default function TimeSideBarForMainGrid() {
    const formatHour = (hour: number) => {
        const period = hour < 12 ? "AM" : "PM";
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${formattedHour} ${period}`;
    };

    const hours = Array.from({ length: 24 }, (_, i) => formatHour(i));

    return (
        <div className="sidebar-time-container">
            <div className="content">
                {hours.map((hour, index) => (
                    <div key={index} className="time">
                        <p>{hour}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
