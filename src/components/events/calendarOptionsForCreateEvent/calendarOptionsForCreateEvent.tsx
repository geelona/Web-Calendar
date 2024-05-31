import "./calendarOptionsForCreateEvent.scss";
function CalendarOptionsForCreateEvent(calendarsData: any[]) {
    return calendarsData.map((calendar: any) => (
        <div
            key={calendar.id}
            className="calendar-option__in-create-event"
            calendar-id={calendar.id}
        >
            <div
                className="calendar-option__in-create-event__color"
                style={{ background: calendar.color }}
            ></div>
            <p className="calendar-option__in-create-event__title">
                {calendar.title}
            </p>
        </div>
    ));
}

export { CalendarOptionsForCreateEvent };
