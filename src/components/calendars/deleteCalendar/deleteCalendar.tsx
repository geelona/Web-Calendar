import "./deleteCalendar.scss";

import Button from "../../common/Button/Button";

export default function DeleteCalendar({
    onDelete,
    setIsTryingToDelete,
    calendarTitle,
}: {
    onDelete: () => void;
    setIsTryingToDelete: (value: boolean) => void;
    calendarTitle: string;
}) {
    return (
        <div className="delete-calendar-modal__content">
            <p>
                Are you sure you want to delete <span>{calendarTitle}</span>?
                You'll no longer have access to this calendar and its events.
            </p>
            <div className="delete-calendar-modal__content__buttons">
                <Button
                    label="Delete"
                    color="primary"
                    onClick={() => {
                        onDelete();
                        setIsTryingToDelete(false);
                    }}
                    fullWidth={true}
                />
                <Button
                    label="Cancel"
                    color="secondary"
                    onClick={() => setIsTryingToDelete(false)}
                    fullWidth={true}
                />
            </div>
        </div>
    );
}
